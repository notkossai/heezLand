import { Link } from "react-router-dom";

import "../home.css"

export default function ParentsSection() {
    return (
        <section className="parents-section">
            <div className="hero">
                <h1 className="title">Why HeezLand</h1>
                <p className="subtitle">HeezLand is a safe, educational space where
                    your child learns to care for the planet - one fun adventure at a time.
                </p>
            </div>

            <div className="learn-more">
                <Link to={"/about"}><button>Discover our project</button></Link>
                 
            </div>
        </section>
    );
}