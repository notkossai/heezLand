
import "./Footer.css";

import LogoSvg from "@/assets/svg/brand/bubble_heez.svg?react"

import { Link } from "react-router-dom";


export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="logo-wrap">
                    <Link to={"/"}><LogoSvg className="logo" /></Link>
                </div>
                <nav className="quick-links">
                    <div className="for-kids">
                        <h4 className="title">For Kids</h4>
                        <ul>
                            <li><Link to={"/learn"}>Learn</Link></li>
                            <li><Link to={"/games"}>Games</Link></li>
                            <li><Link to={"/quiz"}>Quiz</Link></li>
                        </ul>
                    </div>

                    <div className="for-parents">
                        <h4 className="title">Discover</h4>
                        <ul>
                            <li><Link to={"/about"}>About Us</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                            <li><Link to={"/faq"}>FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="for-contact">
                        <h4 className="title">Contact</h4>
                        <ul>
                            <li><Link to={"/socials"}>Our Socials</Link></li>
                            <li><Link to={"/support"}>Support</Link></li>
                            <li><Link to={"/other"}>Other</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="footer-bottom">
                <p className="subtitle">©{year} Together for cleaner planet</p>
            </div>
        </footer>
    );
}