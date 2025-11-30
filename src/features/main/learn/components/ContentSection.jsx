export default function ContentSection({ topics, onTopicClick }) {
  return (
    <div className="learn-content">
      <h2>🎯 Quick Learn (Click to Earn Coins!)</h2>
      <div className="topics-grid">
        {topics.map(topic => (
          <div key={topic.title} className="topic-card">
            <div className="topic-icon">{topic.icon}</div>
            <h3 className="topic-title">{topic.title}</h3>
            <p className="topic-description">{topic.desc}</p>
            <button 
              className="topic-btn" 
              onClick={() => onTopicClick(topic.title)}
            >
              Learn +5 🪙
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}