import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <ul>
                    <li><strong>Explore</strong></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Questions</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Tutorials</a></li>
                </ul>

                <ul>
                    <li><strong>Support</strong></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <ul className="socials">
                    <li><strong>Stay Connected</strong></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>

            <div className="bottom">
                <p>© DEV@Deakin 2024 | Privacy Policy | Terms</p>
            </div>
        </footer>
    );
}

export default Footer;
