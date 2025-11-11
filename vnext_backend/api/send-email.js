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

app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing fields" });
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

    // 1️⃣ Email to Admin (your inbox)
    const adminMail = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Contact Message from ${name}`,
      text: `
📩 New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Service Interested: ${service || "N/A"}

Message:
${message}

-------------------------------------
This email was generated automatically from your website's contact form.
      `,
    };

    // 2️⃣ Acknowledgment Email to User
    const userMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting VNext",
      text: `
Hi ${name},

Thank you for reaching out to VNext regarding ${service || "our services"}.

We’ve received your message and our team will get back to you soon.

Best regards,  
V Next  
📞 8074010081 | ✉️ vnextassociates@gmail.com  
🏢 Kukatpally, Hyderabad
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error /send-email:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default app;
