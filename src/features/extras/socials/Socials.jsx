import "./socials.css";

import EmailUs from "./components/EmailUs";
import SocialMedia from "./components/SocialMedia";
import HeroSection from "./components/HeroSection";

export default function SocialsPage(){
    return(
        <main className="socials-page">
           <HeroSection />
           <SocialMedia />
           <EmailUs />
        </main>
    );
}