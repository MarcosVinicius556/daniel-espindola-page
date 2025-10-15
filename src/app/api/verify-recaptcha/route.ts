import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no verify-recaptcha:", error);
    return NextResponse.json({ success: false, error: "Erro interno" }, { status: 500 });
  }
}
