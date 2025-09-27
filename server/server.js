// server/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// POST /subscribe route
app.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, error: "Email is required" });
    }

    try {
        // Gmail transport with App Password
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // App password
            },
        });

        const mailOptions = {
            from: `"DEV@Deakin" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome to DEV@Deakin Newsletter 🎉",
            text: "Thanks for subscribing to our DEV@Deakin Newsletter!",
            html: "<h2>Welcome!</h2><p>Thanks for subscribing to our <b>DEV@Deakin</b> newsletter 🚀</p>",
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.json({ success: false, error: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
