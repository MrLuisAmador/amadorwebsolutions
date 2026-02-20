import { NextResponse } from "next/server";
import { sendAuditNotification } from "@/lib/email";

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

    try {
      const result = await sendAuditNotification(body);
      if (!result.sent) {
        console.error("Audit email failed:", result.reason);
        return NextResponse.json(
          { error: "Could not submit request. Please try again later." },
          { status: 503 }
        );
      }
    } catch (err) {
      console.error("Audit email error:", err);
      return NextResponse.json(
        { error: "Could not submit request. Please try again later." },
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
