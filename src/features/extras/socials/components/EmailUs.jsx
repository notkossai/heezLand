
import Swal from "sweetalert2";

import TikTokSvg from "@/assets/svg/socials/tiktok.svg?react";
import YouTubeSvg from "@/assets/svg/socials/youtube.svg?react";
import InstagramSvg from "@/assets/svg/socials/instagram.svg?react";
import FacebookSvg from "@/assets/svg/socials/facebook.svg?react";

import DevSocials from "./DevSocials";

export default function EmailUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("http://localhost:5000/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });
    const data = await response.json();
    console.log("API /api/send result:", data);

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        showCloseButton: true,
      });
      event.target.reset();
    }
    else {
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong from our side. Try again later",
        icon: "error",
        showCloseButton: true,
      });
      console.log("Web3Forms error:", data);
    }
  };

  return (
    <main className="contact-section">
      <form className="contact-form" onSubmit={onSubmit}>
        <h2 className="contact-form__title">Contact Form</h2>
        
        <div className="contact-form__group">
          <label className="contact-form__label">
            Full Name
            <span className="contact-form__required">*</span>
          </label>
          <input 
            type="text"
            className="contact-form__input"
            placeholder="Enter your name"
            name="name" 
            required 
          />
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label">
            Email Address
            <span className="contact-form__required">*</span>
          </label>
          <input 
            type="email"
            className="contact-form__input"
            placeholder="Enter your email"
            name="email" 
            required 
          />
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label">
            Your Message
            <span className="contact-form__required">*</span>
          </label>
          <textarea 
            name="message"
            className="contact-form__input contact-form__input--textarea"
            placeholder="Enter your message" 
            required 
          />
        </div>

        <button type="submit" className="contact-form__button">
          Send Message
        </button>
      </form>

      <div className="contact-section__divider"></div>

      <div className="contact-section__content">
        <div className="social-links-section">
          <h1 className="social-links-section__title">Follow us</h1>
          <div className="social-links-grid">
            <div className="social-card social-card--tiktok">
              <div className="social-card__icon">
                <TikTokSvg alt="TikTok" />
              </div>
              <div className="social-card__content">
                <h2 className="social-card__name">TikTok</h2>
                <a href="https://www.tiktok.com/@heezland" className="social-card__link">
                  <p>@heezland</p>
                </a>
              </div>
            </div>

            <div className="social-card social-card--youtube">
              <div className="social-card__icon">
                <YouTubeSvg alt="YouTube" />
              </div>
              <div className="social-card__content">
                <h2 className="social-card__name">YouTube</h2>
                <a href="https://www.youtube.com/@HeezLand" className="social-card__link">
                  <p>@heezland</p>
                </a>
              </div>
            </div>

            <div className="social-card social-card--instagram">
              <div className="social-card__icon">
                <InstagramSvg alt="Instagram" />
              </div>
              <div className="social-card__content">
                <h2 className="social-card__name">Instagram</h2>
                <a href="https://www.instagram.com/heez.land" className="social-card__link">
                  <p>@heez.land</p>
                </a>
              </div>
            </div>

            <div className="social-card social-card--facebook">
              <div className="social-card__icon">
                <FacebookSvg alt="Facebook" />
              </div>
              <div className="social-card__content">
                <h2 className="social-card__name">Facebook</h2>
                <a href="https://www.facebook.com/profile.php?id=61584158890520" className="social-card__link">
                  <p>Heez Land</p>
                </a>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </main>
  );
}