import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";
import { ContactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = ContactSchema.safeParse(json);

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
      const emailResult = await sendContactNotification(body);
      if (!emailResult.sent) {
        console.error("Contact email failed:", emailResult.reason);
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
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
