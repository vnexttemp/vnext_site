import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://vnext-site.vercel.app",
      "https://vnext-site-id9o0p1aa-haris-projects-41e8cc7f.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.post("/api/send-requirements", async (req, res) => {
  try {
    const { name, email, phone, message, service } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields (name, email, phone)",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 1️⃣ Email to Admin
    const adminMail = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Business Requirement from ${name}`,
      text: `
📢 New 'Discuss Your Requirements' Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Page: ${service || "N/A"}

Message:
${message || "No additional message provided."}

-------------------------------------
This email was generated automatically from the website's 'Discuss Your Requirements' form.
      `,
    };

    // 2️⃣ Acknowledgment to User
    const userMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for sharing your requirements with VNext!",
      text: `
Hi ${name},

Thank you for sharing your business requirements with V NEXT${service ? ` regarding ${service}` : ""}.

We’ve received your details and our team will review them shortly.
One of our specialists will reach out to you soon.

Best regards,  
V NEXT  
📞 8074010081 | ✉️ vnextassociates@gmail.com  
🏢 Kukatpally, Hyderabad
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return res.status(200).json({ success: true, message: "Requirement sent successfully!" });
  } catch (error) {
    console.error("Error /send-requirements:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default app;
