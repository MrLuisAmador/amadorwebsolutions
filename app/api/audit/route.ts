import { NextResponse } from "next/server";

export type AuditPayload = {
  email: string;
  website: string;
  business?: string;
  fullName?: string;
  phone?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AuditPayload;
    const { email, website } = body;

    if (!email?.trim() || !website?.trim()) {
      return NextResponse.json(
        { error: "Email and website are required" },
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
