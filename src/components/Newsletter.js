// src/components/Newsletter.js
import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (data.success) {
                setMessage("✅ Subscription successful! Check your email.");
            } else {
                setMessage("❌ Failed: " + (data.error?.errors?.[0]?.message || "Unknown error"));
            }
        } catch (error) {
            setMessage("⚠️ Server error, please try again later.");
        }
    };

    return (
        <div className="newsletter">
            <form onSubmit={handleSubmit} className="newsletter-form">
                <label htmlFor="email"><strong>SIGN UP FOR OUR DAILY INSIDER</strong></label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}
