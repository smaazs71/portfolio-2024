import { NextResponse } from "next/server";
import { sendEmail } from "@/services";
import dotenv from "dotenv";

dotenv.config();

export async function POST(request: any) {
  const { name, emailId, message, checked } = await request.json();
  let emails = process.env.SMTP_EMAIL || "smaazs71@gmaill.com";
  if (checked) emails += "," + emailId;
  console.log('backend active');
  

  const response = await sendEmail(name, emails, message, emailId);
  if (response) {
    return NextResponse.json({ message: "Email sent" });
  } else {
    return NextResponse.json({ message: "Sending failed..." });
  }
}
