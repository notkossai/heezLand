import { useCoin } from '../../contexts/coins/CoinContext';
import './coins.css';

export default function Coins() {
  const { coins, achievements } = useCoin();

  return (
    <div className="coins-display">
      <div className="coins-balance">
        <span className="coins-icon">🪙</span>
        <div className="coins-info">
          <p className="coins-label">Your Coins</p>
          <p className="coins-amount">{coins}</p>
        </div>
      </div>

      {achievements.length > 0 && (
        <div className="coins-achievements">
          <h4 className="coins-achievements__title">Recent Achievements</h4>
          <div className="coins-achievements__list">
            {achievements.slice(-3).map(achievement => (
              <div key={achievement.id} className="achievement-item">
                <span className="achievement-icon">{achievement.icon}</span>
                <span className="achievement-activity">{achievement.activity}</span>
                <span className="achievement-coins">+{achievement.amount}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
