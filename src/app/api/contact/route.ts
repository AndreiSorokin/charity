import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json();

  if (!name || !phone || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission from ${name}`,
      text:
        `
          You have a new contact form submission:

          Name: ${name}
          Email: ${email}
          Phone: ${phone}

          Message:
          ${message}
        `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
