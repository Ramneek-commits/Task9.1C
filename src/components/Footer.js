import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <ul>
                    <li><strong>Explore</strong></li>
                    {/* FIX: replaced <a href="#"> with safe "#" anchors */}
                    <li><a href="/home">Home</a></li>
                    <li><a href="/questions">Questions</a></li>
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="/tutorials">Tutorials</a></li>
                </ul>

                <ul>
                    <li><strong>Support</strong></li>
                    <li><a href="/faqs">FAQs</a></li>
                    <li><a href="/help">Help</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <ul className="socials">
                    <li><strong>Stay Connected</strong></li>
                    {/* External links should have full URLs */}
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                </ul>
            </div>

            <div className="bottom">
                <p>© DEV@Deakin 2024 | Privacy Policy | Terms</p>
            </div>
        </footer>
    );
}

export default Footer;
