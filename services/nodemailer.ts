import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL, // "leda.jacobi81@ethereal.email",
    pass: process.env.SMTP_PASSWORD, // "CSTs8a3MpU8YxWDNAp",
  },
});

export const sendEmail = async (
  name: string,
  emails: string,
  message: string,
  emailId: string
) => {
  try {
    const info = await transporter.sendMail({
      from: `"AP Furniture" <${process.env.SMTP_EMAIL}>`,
      to: emails,
      subject: "Enquiry",
      text: message,
      html: `<div><h1>Hi, this is ${name},</h1> <p>${message}</p> <h3 style="float:'right'">Email Id: ${emailId}</h3></div>`,
    });
    return info;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
