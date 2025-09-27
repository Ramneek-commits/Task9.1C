import React from "react";
import heroImg from "../assets/myhero.jpg"; // <-- match your file name

function HeroImage() {
    return (
        <div
            className="hero"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            Welcome to DEV@Deakin
        </div>
    );
}

export default HeroImage;
