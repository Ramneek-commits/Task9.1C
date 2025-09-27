// src/components/HeaderBar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/deakin-logo.png"; // import logo
import "../styles.css";

function HeaderBar() {
    const navigate = useNavigate();

    return (
        <header className="custom-header">
            {/* Logo on left */}
            <div className="header-left">
                <img src={logo} alt="Deakin Logo" className="deakin-logo" />
            </div>

            <h1 className="header-title">DEV@Deakin</h1>
            <div className="header-buttons">
                <input className="header-search" type="text" placeholder="Search..." />
                <button className="header-btn" onClick={() => navigate("/post")}>Post</button>
                <button className="header-btn" onClick={() => navigate("/login")}>Login</button>
                <button className="header-btn" onClick={() => navigate("/plans")}>Plans</button>
            </div>
        </header>
    );
}

export default HeaderBar;
