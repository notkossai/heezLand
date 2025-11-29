import { useCoin } from '../../../../contexts/coins/CoinContext';
import './other.css';

const FEATURES = [
  {
    id: 1,
    title: 'Recycling Games',
    icon: '🎮',
    description: 'Fun educational games to learn about recycling'
  },
  {
    id: 2,
    title: 'Reward Shop',
    icon: '🏪',
    description: 'Spend your coins on digital rewards and badges'
  },
  {
    id: 3,
    title: 'Community Challenges',
    icon: '🏆',
    description: 'Compete with friends in eco-friendly challenges'
  },
  {
    id: 4,
    title: 'Achievement Badges',
    icon: '🏅',
    description: 'Earn badges as you complete recycling goals'
  }
];

export default function OtherPage() {
  const { earnCoins, coins } = useCoin();

  const handleExplore = (feature) => {
    earnCoins(5, `Explored ${feature}`);
  };

  return (
    <main className="other-page">
      <h1 className="hero">🌟 Explore More Features</h1>
      <p className="subtitle">Discover what Heez Land has to offer</p>
      <p className="comments">Make learning about recycling fun and rewarding!</p>

      <div className="other-container">
        <div className="other-features">
          {FEATURES.map(feature => (
            <div key={feature.id} className="other-feature">
              <div className="other-feature__icon">{feature.icon}</div>
              <h3 className="other-feature__title">{feature.title}</h3>
              <p className="other-feature__description">{feature.description}</p>
              <button 
                className="other-feature__action"
                onClick={() => handleExplore(feature.title)}
              >
                Explore →
              </button>
            </div>
          ))}
        </div>

        <div className="other-stats">
          <div className="other-stat">
            <div className="other-stat__number">{coins}</div>
            <div className="other-stat__label">Your Coins</div>
          </div>
          <div className="other-stat">
            <div className="other-stat__number">∞</div>
            <div className="other-stat__label">Possibilities</div>
          </div>
          <div className="other-stat">
            <div className="other-stat__number">🌍</div>
            <div className="other-stat__label">Making Impact</div>
          </div>
        </div>

        <div className="other-cta">
          <h3>Ready to Make a Difference?</h3>
          <p>Start your recycling journey today and earn amazing rewards!</p>
          <button className="other-cta__button">Get Started 🚀</button>
        </div>
      </div>
    </main>
  );
}
