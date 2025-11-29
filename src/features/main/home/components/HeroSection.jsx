import { Link } from 'react-router-dom';
import CoinSvg from "@/assets/svg/brand/coin.svg?react";

export default function HeroSection({ coins }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">🌍 Welcome to Heez Land</h1>
        <p className="hero__subtitle">
          Learn to recycle, earn coins, and save our planet!
        </p>
        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-icon"><CoinSvg /></div>
            <span className="hero__stat-value">{coins}</span>
            <span className="hero__stat-label">Your Coins</span>
          </div>
        </div>
        <div className="hero__buttons">
          <Link to="/learn" className="hero__button hero__button--primary">
            Explore Learning →
          </Link>
          <Link to="/games" className="hero__button hero__button--secondary">
            Play Games →
          </Link>
        </div>
      </div>
      <div className="hero__graphics">
        <div className="hero__decoration hero__decoration--1">🌱</div>
        <div className="hero__decoration hero__decoration--2">♻️</div>
        <div className="hero__decoration hero__decoration--3">🌍</div>
      </div>
    </section>
  );
}
