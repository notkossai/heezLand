import { useState } from 'react';
import { useCoin } from '../../../../contexts/coins/CoinContext';
import HeroSection from './components/HeroSection';
import KidsSection from './components/KidsSection';
import ParentsSection from './components/ParentsSection';
import './home.css';

export default function HomePage() {
  const { coins } = useCoin();

  return (
    <main className="home-page">
      <HeroSection coins={coins} />
      <KidsSection />
      <ParentsSection />
      
      <section className="home-cta">
        <h2>Ready to Start Your Recycling Journey?</h2>
        <p>Learn, play games, and earn coins while saving the planet!</p>
        <div className="home-cta__buttons">
          <a href="/learn" className="home-cta__button home-cta__button--primary">
            Start Learning 📚
          </a>
          <a href="/games" className="home-cta__button home-cta__button--secondary">
            Play Games 🎮
          </a>
        </div>
      </section>
    </main>
  );
}
