export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">Connect With Heez Land</h1>
          <p className="hero-section__subtitle">
            Follow us across all social media platforms for the latest updates and community engagement
          </p>
          <div className="hero-section__cta">
            <a href="#socials" className="hero-section__button">
              Explore Socials
            </a>
          </div>
        </div>
        
        <div className="hero-section__visual">
          <div className="hero-section__gradient-blob hero-section__gradient-blob--1"></div>
          <div className="hero-section__gradient-blob hero-section__gradient-blob--2"></div>
          <div className="hero-section__gradient-blob hero-section__gradient-blob--3"></div>
        </div>
      </div>
    </section>
  );
}