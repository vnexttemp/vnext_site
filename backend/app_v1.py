from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Allow frontend to call backend
cors = CORS(app, resources={
  r"/*": {
    "origins": [
      "https://vnext-site.vercel.app", 
      "http://localhost:5173" # allow local dev server
    ]
  }
})

SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")  # example
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USER = os.getenv("SMTP_USER", "yourmail@example.com")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "yourpassword")


@app.route("/send-email", methods=["POST"])
def send_email():
    try:
        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        company = data.get("company")
        service = data.get("service")
        message = data.get("message")

        if not (name and email and message):
            return jsonify({"success": False, "error": "Missing fields"}), 400

        # ===============================
        # 1️⃣ Send detailed mail to yourself
        # ===============================
        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = SMTP_USER
        msg["Subject"] = f"New Contact Message from {name}"
        msg.add_header("Reply-To", email)

        # Nicely formatted message body
        body = f"""
📩 New Contact Form Submission

Name: {name}
Email: {email}
Phone: {phone or "N/A"}
Company: {company or "N/A"}
Service Interested: {service or "N/A"}

Message:
{message}

-------------------------------------
This email was generated automatically from your website's contact form.
        """
        msg.attach(MIMEText(body, "plain"))

        # Send email to your inbox
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)

        # ===============================
        # 2️⃣ Auto acknowledgment to user
        # ===============================
        ack = MIMEMultipart()
        ack["From"] = SMTP_USER
        ack["To"] = email
        ack["Subject"] = "Thank you for contacting VNext"

        ack_body = f"""
Hi {name},

Thank you for reaching out to VNext regarding {service or "our services"}.

We’ve received your message and our team will get back to you soon.

Best regards,  
V Next 
📞 8074010081 | ✉️ vnextassociates@gmail.com  
🏢 Kukatpally, Hyderabad
        """
        ack.attach(MIMEText(ack_body, "plain"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(ack)

        return jsonify({"success": True, "message": "Email sent successfully!"})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route("/send-quote", methods=["POST"])
def send_quote():
    try:
        data = request.get_json() or {}
        print("DEBUG /send-quote received:", data)

        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")

        if not (name and email and phone):
            return jsonify({"success": False, "error": "Missing required fields (name, email, phone)"}), 400

        # Reuse your existing env vars
        SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
        SMTP_USER = os.getenv("SMTP_USER")
        SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

        if not (SMTP_USER and SMTP_PASSWORD):
            return jsonify({"success": False, "error": "Mail server not configured"}), 500

        # ✉️ Compose quote email for the user
        subject = "Your Quote from V NEXT"
        body = f"""
Hi {name},

Thank you for your interest in V NEXT.

We’ve received your quote request and are excited to assist you.
Here are our standard offerings and estimated solutions:

------------------------------------------------------------
🔹 Inventory & Compliance Audits  
   Ensure accuracy and transparency in your operations.

🔹 Manpower Optimization  
   Tailored staffing and audit solutions for maximum efficiency.

🔹 Process Automation Consulting  
   Simplify workflows with our ERP and RFID-based automation tools.
------------------------------------------------------------

Our team will reach out to you within 24 hours to provide a customized quote.

Your Details:
Name: {name}
Email: {email}
Phone: {phone}

Warm regards,  
V NEXT
8074010081 | vnextassociates@gmail.com  
"""

        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = email
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)

        print(f"Quote email sent successfully to {email}")
        return jsonify({"success": True, "message": "Quote sent successfully!"}), 200

    except Exception as e:
        print("ERROR /send-quote:", e)
        return jsonify({"success": False, "error": str(e)}), 500

@app.route("/send-requirements", methods=["POST"])
def send_requirements():
    try:
        data = request.get_json() or {}

        # Extract fields safely
        name = (data.get("name") or "").strip()
        email = (data.get("email") or "").strip()
        phone = (data.get("phone") or "").strip()
        message = (data.get("message") or "").strip()
        service = (data.get("service") or "").strip()

        # ✅ Only these three are mandatory
        if not name or not email or not phone:
            return jsonify({"success": False, "error": "Missing required fields (name, email, phone)"}), 400

        # Load email credentials
        SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
        SMTP_USER = os.getenv("SMTP_USER")
        SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

        # --- 1️⃣ Send email to YOU (VNext Inbox)
        admin_msg = MIMEMultipart()
        admin_msg["From"] = SMTP_USER
        admin_msg["To"] = SMTP_USER
        admin_msg["Subject"] = f"New Business Requirement from {name}"

        admin_body = f"""
📢 New 'Discuss Your Requirements' Form Submission

Name: {name}
Email: {email}
Phone: {phone}
Service Page: {service or "N/A"}

Message:
{message or "No additional message provided."}

-------------------------------------
This email was generated automatically from the website's 'Discuss Your Requirements' form.
        """
        admin_msg.attach(MIMEText(admin_body, "plain"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(admin_msg)

        # --- 2️⃣ Auto-acknowledgment to the user
        user_ack = MIMEMultipart()
        user_ack["From"] = SMTP_USER
        user_ack["To"] = email
        user_ack["Subject"] = "Thank you for sharing your requirements with VNext!"

        ack_body = f"""
Hi {name},

Thank you for sharing your business requirements with V NEXT{f' regarding {service}' if service else ''}.

We’ve received your details and our team will review them shortly.
One of our specialists will reach out to you soon.

Best regards,  
V NEXT  
📞 8074010081 | ✉️ vnextassociates@gmail.com  
🏢 Kukatpally, Hyderabad
        """
        user_ack.attach(MIMEText(ack_body, "plain"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(user_ack)

        return jsonify({"success": True, "message": "Requirement sent successfully!"}), 200

    except Exception as e:
        print("ERROR /send-requirements:", e)
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
