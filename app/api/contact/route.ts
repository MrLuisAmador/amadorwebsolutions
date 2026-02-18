import { NextResponse } from "next/server";

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

    // TODO: persist to DB, send notification email, or forward to CRM
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
