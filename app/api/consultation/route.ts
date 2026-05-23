import { NextResponse } from "next/server";

// Frontend ready consultation endpoint. Connect to Resend, SMTP, or Formspree
// later by replacing the success path with the chosen provider's send call.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["name", "email", "phone", "matter", "description"];
    for (const key of required) {
      if (!body?.[key] || typeof body[key] !== "string" || !body[key].trim()) {
        return NextResponse.json(
          { ok: false, error: `Missing field: ${key}` },
          { status: 400 }
        );
      }
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
