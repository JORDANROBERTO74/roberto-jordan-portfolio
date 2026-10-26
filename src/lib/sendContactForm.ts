// src/lib/sendContactForm.ts
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export async function sendContactForm(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
  time: string;
}) {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        time: values.time,
      },
      PUBLIC_KEY
    );

    return result;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
}
