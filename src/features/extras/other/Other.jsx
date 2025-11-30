import { useCoin } from '../../../../contexts/coins/CoinContext';
import { useNavigate } from 'react-router-dom';
import './other.css';

const FEATURES = [
  {
    id: 1,
    title: 'Recycling Games',
    icon: '🎮',
    description: 'Fun educational games to learn about recycling',
    route: '/games',
    isComplete: true
  },
  {
    id: 2,
    title: 'Reward Shop',
    icon: '🏪',
    description: 'Spend your coins on digital rewards and badges',
    route: '/shop',
    isComplete: false
  },
  {
    id: 3,
    title: 'Community Challenges',
    icon: '🏆',
    description: 'Compete with friends in eco-friendly challenges',
    route: '/community',
    isComplete: false
  },
  {
    id: 4,
    title: 'Achievement Badges',
    icon: '🏅',
    description: 'Earn badges as you complete recycling goals',
    route: '/achievements',
    isComplete: false
  }
];

export default function OtherPage() {
  const { earnCoins, coins } = useCoin();
  const navigate = useNavigate();

  const handleExplore = (feature) => {
    if (feature.isComplete) {
      // Navigate to the feature if it's complete
      earnCoins(5, `Explored ${feature.title}`);
      navigate(feature.route);
    } else {
      // Navigate to under-construction page
      navigate('/under-construction');
    }
  };

  const handleGetStarted = () => {
    navigate('/under-construction');
  };

  return (
    <main className="other-page">
      <h1>🌟 Explore More Features</h1>
      <p className>Discover what Heez Land has to offer</p>

      <div className="other-container">
        <div className="other-features">
          {FEATURES.map(feature => (
            <div 
              key={feature.id} 
              className="other-feature"
              onClick={() => handleExplore(feature)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleExplore(feature)}
            >
              <div className="other-feature__icon">{feature.icon}</div>
              <h3 className="other-feature__title">{feature.title}</h3>
              <p className="other-feature__description">{feature.description}</p>
              <button 
                className="other-feature__action"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExplore(feature);
                }}
              >
                {feature.isComplete ? 'Explore →' : 'Coming Soon...'}
              </button>
              {!feature.isComplete && (
                <span className="other-feature__badge">🚧 In Progress</span>
              )}
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
          <button 
            className="other-cta__button"
            onClick={handleGetStarted}
          >
            Get Started 🚀
          </button>
        </div>
      </div>
    </main>
  );
}