import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Plans() {
    const redirect = useNavigate();

    return (
        <div className="plans-page">
            <h1 className="plans-title">Select Your Subscription Plan</h1>

            <div className="plans-container">
                {/* Free Tier */}
                <div className="plan-card">
                    <h2>Starter</h2>
                    <p className="price">$0 / month</p>
                    <ul>
                        <li>Read all public articles</li>
                        <li>Community access</li>
                        <li>Basic help desk</li>
                    </ul>
                    <button
                        className="btn-free"
                        onClick={() => alert("✅ You are on the Free Plan")}
                    >
                        Choose Free
                    </button>
                </div>

                {/* Premium Tier */}
                <div className="plan-card premium">
                    <h2>Pro</h2>
                    <p className="price">$9.99 / month</p>
                    <ul>
                        <li>Advanced customization</li>
                        <li>Exclusive analytics dashboard</li>
                        <li>Priority customer support</li>
                    </ul>
                    <button
                        className="btn-premium"
                        onClick={() => redirect("/payment")}
                    >
                        Choose Premium
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Plans;
