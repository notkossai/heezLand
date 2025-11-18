
/*svg*/
import GrassSvg from "@/assets/svg/green-grass.svg?react";
import HeroLogoSvg from "@/assets/svg/brand/msct_heez_lpr.svg?react"
import HeroLogoMdSvg from "@/assets/svg/brand/circle_msct_heez.svg?react"

/*css*/
     import "../home.css";


export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="logo-wrap">
                <HeroLogoSvg className="logo Xl" />
                <HeroLogoMdSvg className="logo md" />
            </div>
            <div className="grass-wrap">
                 <GrassSvg />
            </div>
        </section>
    );
}