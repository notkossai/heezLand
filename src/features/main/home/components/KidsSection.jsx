export default function KidsSection() {
  const features = [
    {
      icon: '🎮',
      title: 'Fun Games',
      description: 'Learn through interactive recycling games'
    },
    {
      icon: '📚',
      title: 'Educational Content',
      description: 'Read blogs and watch videos about recycling'
    },
    {
      icon: '🪙',
      title: 'Earn Coins',
      description: 'Get rewarded for learning and completing tasks'
    },
    {
      icon: '🏆',
      title: 'Achievements',
      description: 'Unlock badges and climb the leaderboard'
    }
  ];

  return (
    <section className="kids-section">
      <div className="kids-container">
        <h2 className="kids-title">👶 For Kids</h2>
        <p className="kids-subtitle">Have fun while learning to recycle!</p>
        
        <div className="kids-features">
          {features.map((feature, index) => (
            <div key={index} className="kids-feature card">
              <div className="kids-feature__icon">{feature.icon}</div>
              <h3 className="kids-feature__title">{feature.title}</h3>
              <p className="kids-feature__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
