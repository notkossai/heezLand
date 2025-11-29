import TikTokSvg from "@/assets/svg/socials/tiktok.svg?react";
import YouTubeSvg from "@/assets/svg/socials/youtube.svg?react";
import InstagramSvg from "@/assets/svg/socials/instagram.svg?react";
import FacebookSvg from "@/assets/svg/socials/facebook.svg?react";

import DevSocials from "./DevSocials";




export default function SocialMedia() {
    return (
        <main className="socialLinks-section">
            <div className="socialLinks-container">
                <div className="socialLink tiktok">
                    <div className="img">
                        <TikTokSvg alt="TikTok" />
                    </div>
                    <div className="text-container">
                        <h2>TikTok</h2>
                        <a href="https://www.tiktok.com/@heezland">
                            <p>@heezland</p>
                        </a>
                    </div>
                </div>
                <div className="socialLink youtube">
                    <div className="img">
                        <YouTubeSvg alt="YouTube" />
                    </div>
                    <div className="text-conatiner">
                        <h2>Youtube</h2>
                        <a href="https://www.youtube.com/@HeezLand">
                            <p>@heezland</p>
                        </a>
                    </div>
                </div>
                <div className="socialLink instagram">
                    <div className="img">
                        <InstagramSvg alt="Instagram" />
                    </div>
                    <div className="text-conatiner">
                        <h2>Instagram</h2>
                        <a href="https://www.instagram.com/heez.land">
                            <p>@heez.land</p>
                        </a>
                    </div>
                </div>
                <div className="socialLink facebook">
                    <div className="img">
                        <FacebookSvg alt="Facebook" />
                    </div>
                    <div className="text-conatiner">
                        <h2>Facebook</h2>
                        <a href="https://www.facebook.com/profile.php?id=61584158890520">
                            <p>Heez Land</p>
                        </a>
                    </div>
                </div>
            </div>        
        </main>
    );
}