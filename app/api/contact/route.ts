import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";

export type ContactPayload = {
  fullName: string;
  email: string;
  websiteUrl: string;
  helpWith?: string;
  goal?: string;
  budget: string;
  startWhen?: string;
  additionalDetails?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { fullName, email, websiteUrl, budget } = body;

    if (!fullName?.trim() || !email?.trim() || !websiteUrl?.trim() || !budget?.trim()) {
      return NextResponse.json(
        { error: "Full name, email, website URL, and budget are required" },
        { status: 400 }
      );
    }

    try {
      const result = await sendContactNotification(body);
      if (!result.sent) {
        console.error("Contact email failed:", result.reason);
        return NextResponse.json(
          { error: "Could not send message. Please try again later." },
          { status: 503 }
        );
      }
    } catch (err) {
      console.error("Contact email error:", err);
      return NextResponse.json(
        { error: "Could not send message. Please try again later." },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
