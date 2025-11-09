
/*svg*/
import GrassSvg from "@/assets/svg/green-grass.svg?react";
import HeroLogoSvg from "@/assets/svg/brand/msct_heez_lpr-green.svg?react"

/*css*/
     import "../home.css";


export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="logo-wrap">
                <HeroLogoSvg className="hero-logo" />
            </div>
            <div className="grass-wrap">
                 <GrassSvg />
            </div>
        </section>
    );
}