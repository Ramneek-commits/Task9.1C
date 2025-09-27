// src/components/Login.js
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            setUser(u);
        });
        return () => unsub();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate("/"); // redirect back to login page
        } catch (err) {
            setError("Sign-out failed");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}

            {user ? (
                <>
                    <p>Welcome <strong>{user.email}</strong></p>
                    <button onClick={handleLogout}>Sign Out</button>
                </>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            )}

            <p>
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}

export default Login;
