
import "./home.css";

import NavBar from "@/components/NavBar/NavBar";

import HeroSection from "./components/HeroSection";
import KidsSection from "./components/KidsSection";
import ParentsSection from "./components/ParentsSection";

export default function HomePage(){
    return(
        <>
        <main className="home-page">
        <NavBar showCoins={true} />
        <HeroSection />
        <KidsSection />
        <ParentsSection />
        </main>
        </>
    );
}