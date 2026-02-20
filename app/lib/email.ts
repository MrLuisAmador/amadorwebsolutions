import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const MAIL_FROM = process.env.MAIL_FROM ?? SMTP_USER;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL ?? SMTP_USER;

function getTransporter() {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP_USER and SMTP_PASS must be set in environment");
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

function isEmailConfigured(): boolean {
  return Boolean(SMTP_USER && SMTP_PASS);
}

export type SendEmailOptions = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

export async function sendEmail({ to, subject, text, html, replyTo }: SendEmailOptions) {
  if (!isEmailConfigured()) {
    console.warn("Email not configured: SMTP_USER and SMTP_PASS required");
    return { sent: false, reason: "not_configured" };
  }

  const transporter = getTransporter();
  await transporter.sendMail({
    from: MAIL_FROM,
    to,
    replyTo,
    subject,
    text,
    html: html ?? text.replace(/\n/g, "<br>"),
  });

  return { sent: true };
}

export async function sendContactNotification(payload: {
  fullName: string;
  email: string;
  websiteUrl: string;
  helpWith?: string;
  goal?: string;
  budget: string;
  startWhen?: string;
  additionalDetails?: string;
}) {
  const recipient = NOTIFICATION_EMAIL;
  if (!recipient) {
    console.warn("NOTIFICATION_EMAIL not set");
    return { sent: false, reason: "no_recipient" };
  }

  const lines = [
    `New contact form submission`,
    ``,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Website: ${payload.websiteUrl}`,
    `Budget: ${payload.budget}`,
  ];

  if (payload.helpWith) lines.push(`Help with: ${payload.helpWith}`);
  if (payload.goal) lines.push(`Goal: ${payload.goal}`);
  if (payload.startWhen) lines.push(`Timeline: ${payload.startWhen}`);
  if (payload.additionalDetails) lines.push(`Details: ${payload.additionalDetails}`);

  const text = lines.join("\n");

  return sendEmail({
    to: recipient,
    subject: `Contact form: ${payload.fullName} (${payload.email})`,
    text,
    replyTo: payload.email,
  });
}

export async function sendAuditNotification(payload: {
  email: string;
  website: string;
  business?: string;
  fullName?: string;
  phone?: string;
}) {
  const recipient = NOTIFICATION_EMAIL;
  if (!recipient) {
    console.warn("NOTIFICATION_EMAIL not set");
    return { sent: false, reason: "no_recipient" };
  }

  const lines = [
    `New audit request`,
    ``,
    `Email: ${payload.email}`,
    `Website: ${payload.website}`,
  ];

  if (payload.business) lines.push(`Business: ${payload.business}`);
  if (payload.fullName) lines.push(`Name: ${payload.fullName}`);
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);

  const text = lines.join("\n");

  return sendEmail({
    to: recipient,
    subject: `Audit request: ${payload.email} — ${payload.website}`,
    text,
    replyTo: payload.email,
  });
}
