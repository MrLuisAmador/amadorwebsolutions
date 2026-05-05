import { z } from "zod";
import { BUDGET_OPTIONS, HELP_OPTIONS, START_OPTIONS } from "./constants";

const budgetValues = BUDGET_OPTIONS.map((o) => o.value).filter(Boolean) as [
  string,
  ...string[],
];
const startValues = START_OPTIONS.map((o) => o.value).filter(Boolean) as [
  string,
  ...string[],
];

export const ContactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  websiteUrl: z.string().url("Invalid website URL"),
  helpWith: z.enum(HELP_OPTIONS).optional(),
  goal: z.string().optional(),
  budget: z.enum(budgetValues, {
    message: "Please select a budget range",
  }),
  startWhen: z.enum(startValues).optional(),
  additionalDetails: z.string().optional(),
});

export type ContactPayload = z.infer<typeof ContactSchema>;

export const AuditSchema = z.object({
  email: z.string().email("Invalid email address"),
  website: z.string().url("Invalid website URL"),
  business: z.string().optional(),
  fullName: z.string().optional(),
  phone: z.string().optional(),
});

export type AuditPayload = z.infer<typeof AuditSchema>;

export const EmailOptionsSchema = z.object({
  to: z.string().email(),
  subject: z.string().min(1),
  text: z.string().min(1),
  html: z.string().optional(),
  replyTo: z.string().email().optional(),
});

export type SendEmailOptions = z.infer<typeof EmailOptionsSchema>;
