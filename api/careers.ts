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

  try {
    const contentType = (req.headers["content-type"] || "").toString();
    let payload: any = {};

    if (contentType.includes("application/json")) {
      payload = req.body || {};
    } else if (contentType.includes("multipart/form-data")) {
      // On Vercel serverless, raw multipart parsing is not supported without middleware.
      // Accept minimal fields if body was pre-parsed by a dev server; otherwise reject.
      payload = req.body || {};
    } else {
      payload = req.body || {};
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      experience
    } = payload;

    // Handle file upload (if present)
    const resumeFile = (req as any).file;

    if (!firstName || !lastName || !email || !phone || !position || !experience) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hasSMTP = !envError;

    const toEmail = (process.env.CAREERS_TO_EMAIL || process.env.CAREERS_TO || process.env.CONTACT_TO_EMAIL || "shivanibhandari9991@gmail.com") as string;
    const mailFrom = (process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@ysmn.local") as string;
    const fromLabel = `${firstName} ${lastName} <${mailFrom}>`;

    const resumeInfo = resumeFile 
      ? `<p><strong>Resume:</strong> ${resumeFile.originalname} (${Math.round(resumeFile.size / 1024)}KB)</p>`
      : '<p><strong>Resume:</strong> No resume uploaded</p>';

    const html = `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Experience:</strong></p>
      <p>${String(experience).replace(/\n/g, "<br/>")}</p>
      ${resumeInfo}
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

      const mailOptions: any = {
        from: fromLabel,
        to: toEmail,
        replyTo: email,
        subject: `New job application: ${position} — ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\n\nExperience:\n${experience}`,
        html
      };

      // Add resume as attachment if present
      if (resumeFile) {
        mailOptions.attachments = [{
          filename: resumeFile.originalname,
          content: resumeFile.buffer,
          contentType: resumeFile.mimetype
        }];
      }

      await transporter.sendMail(mailOptions);
    } else {
      const submission = {
        type: "careers",
        receivedAt: new Date().toISOString(),
        toEmail,
        firstName,
        lastName,
        email,
        phone,
        position,
        experience,
        resume: resumeFile ? {
          filename: resumeFile.originalname,
          size: resumeFile.size,
          mimetype: resumeFile.mimetype
        } : null
      };
      console.log("[careers] SMTP disabled; captured submission:", submission);
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
    console.error("careers endpoint error", error);
    return res.status(500).json({ error: "Failed to submit application" });
  }
}








