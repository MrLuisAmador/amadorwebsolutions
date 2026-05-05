import { NextResponse } from "next/server";
import { sendAuditNotification } from "@/lib/email";
import { AuditSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = AuditSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { 
          error: "Validation failed", 
          details: result.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const body = result.data;

    try {
      const emailResult = await sendAuditNotification(body);
      if (!emailResult.sent) {
        console.error("Audit email failed:", emailResult.reason);
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
  } catch (error) {
    console.error("Audit API error:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
