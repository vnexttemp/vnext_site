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
CORS(app)  # Allow frontend to call backend

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
        message = data.get("message")

        if not (name and email and message):
            return jsonify({"success": False, "error": "Missing fields"}), 400

        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = SMTP_USER  # Send to yourself
        msg["Subject"] = f"New Contact Message from {name}"
        msg.attach(MIMEText(f"From: {name}\nEmail: {email}\n\n{message}", "plain"))

        # Send the email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)

        return jsonify({"success": True, "message": "Email sent successfully!"})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
