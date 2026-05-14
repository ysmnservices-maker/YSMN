import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS"
];

function ensureEnv(): string | null {
  const missing = requiredEnvVars.filter((k) => !process.env[k]);
  return missing.length ? `Missing env vars: ${missing.join(", ")}` : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const envError = ensureEnv();

  const { firstName, lastName, email, phone, serviceType, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const hasSMTP = !envError;

    const toEmail = (process.env.CONTACT_TO_EMAIL || process.env.CONTACT_TO || "shivanibhandari9991@gmail.com") as string;
    const mailFrom = (process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@ysmn.local") as string;
    const fromLabel = `${firstName} ${lastName} <${mailFrom}>`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Type:</strong> ${serviceType || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message as string).replace(/\n/g, "<br/>")}</p>
    `;

    if (hasSMTP) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST as string,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER as string,
          pass: process.env.SMTP_PASS as string
        }
      });

      await transporter.sendMail({
        from: fromLabel,
        to: toEmail,
        replyTo: email,
        subject: `New enquiry from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService Type: ${serviceType || "Not specified"}\n\n${message}`,
        html
      });
    } else {
      // Fallback: log and persist locally for dev usage
      const submission = {
        type: "contact",
        receivedAt: new Date().toISOString(),
        toEmail,
        firstName,
        lastName,
        email,
        phone,
        serviceType,
        message
      };
      console.log("[contact] SMTP disabled; captured submission:", submission);
      if (!process.env.VERCEL) {
        const logDir = path.resolve(process.cwd(), "shared");
        const logFile = path.join(logDir, "submissions.jsonl");
        try {
          await fs.mkdir(logDir, { recursive: true });
          await fs.appendFile(logFile, JSON.stringify(submission) + "\n", { encoding: "utf8" });
        } catch (e) {
          console.warn("Failed to write local submissions log:", e);
        }
      }
    }

    return res.status(200).json({ ok: true, via: hasSMTP ? "smtp" : "local" });
  } catch (error: any) {
    console.error("contact endpoint error", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}





