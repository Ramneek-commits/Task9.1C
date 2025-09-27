import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../styles.css";

// Initialize Stripe instance
const stripeInstance = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        // Placeholder for backend integration
        alert(" Payment attempt simulated. Connect backend for real transactions.");
    };

    return (
        <div className="payment-page">
            <form onSubmit={submitHandler} className="payment-card">
                <h2>Upgrade to Premium</h2>
                <p className="payment-description">
                    Enter your card details to unlock exclusive Premium features
                </p>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "15px",
                                color: "#333",
                                "::placeholder": { color: "#888" },
                            },
                            invalid: { color: "#e54242" },
                        },
                    }}
                />

                <button type="submit" className="btn-premium-pay">
                    Confirm Payment - $9.99
                </button>
            </form>
        </div>
    );
}

export default function Payment() {
    return (
        <Elements stripe={stripeInstance}>
            <PaymentForm />
        </Elements>
    );
}
