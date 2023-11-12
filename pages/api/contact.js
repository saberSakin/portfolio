// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "md.shakin18@gmail.com", // Your email
        pass: "vhxi asju wouw vlzq", // Your password or App Password
      },
    });

    // Configure the email content
    const mailOptions = {
      from: email, // Use the sender's email address
      to: "md.shakin18@gmail.com", // Your email
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);

      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ success: false, message: "Error sending email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
