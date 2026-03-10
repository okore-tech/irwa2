import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: connect to an email service (e.g. Resend, SendGrid) to forward submissions
  // For now, logs to server console and returns success so the UI confirms immediately
  console.log("[iRWA contact]", email);

  return NextResponse.json({ ok: true });
}
