import "./socials.css";

import React from "react";

import EmailUs from "./components/EmailUs";
import SocialMedia from "./components/SocialMedia";
import HeroSection from "./components/HeroSection";
import DevSocials from "./components/DevSocials";

export default function SocialsPage(){
    return(
        <main className="socials-page">
           <HeroSection />
           <EmailUs />
           <DevSocials />
        </main>
    );
}