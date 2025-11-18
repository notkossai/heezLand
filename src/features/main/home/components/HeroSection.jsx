
/*svg*/
import GrassSvg from "@/assets/svg/green-grass.svg?react";
import HeroLogoSvg from "@/assets/svg/brand/msct_heez_lpr.svg?react"
import HeroLogoMdSvg from "@/assets/svg/brand/circle_msct_heez.svg?react"

/*css*/
     import "../home.css";


export default function HeroSection() {
    return (
        <section className="hero-section">

            <div className="tagline">
                <p id="typingText">Learn, Play, Recycle - The eco-education 
                    platform for kids & families.
                </p>
            </div>

            <div className="logo-wrap">
                <HeroLogoSvg className="logo xl" />
                <HeroLogoMdSvg className="logo md" />
            </div>

            <div className="quick-link">
                <button className="toKids">Go to kids</button>
                <button className="toParents">Go to parents</button>
            </div>
            <div className="grass-wrap">
                 <GrassSvg />
            </div>
        </section>
    );
}