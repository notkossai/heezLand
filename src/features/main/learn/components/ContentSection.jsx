import { useCoin } from "../../../../../contexts/coins/CoinContext";

export default function ContentSection() {
  const { earnCoins } = useCoin();

  const handleLearnTopic = (topic) => {
    earnCoins(5, `Learned about ${topic}`);
  };

  const topics = [
    {
      id: 1,
      title: 'Types of Plastics',
      description: 'Learn about different plastic types (PET, HDPE, PVC, LDPE, PP, PS)',
      icon: '♻️'
    },
    {
      id: 2,
      title: 'Glass Recycling',
      description: 'Understand how glass is recycled infinitely without losing quality',
      icon: '🔷'
    },
    {
      id: 3,
      title: 'Paper & Cardboard',
      description: 'Discover the paper recycling process and its environmental impact',
      icon: '📄'
    },
    {
      id: 4,
      title: 'Metal Recycling',
      description: 'Learn about aluminum and steel recycling benefits',
      icon: '⚙️'
    },
    {
      id: 5,
      title: 'Composting',
      description: 'Turn food scraps into nutrient-rich soil for gardens',
      icon: '🌱'
    },
    {
      id: 6,
      title: 'Carbon Footprint',
      description: 'Understand how recycling reduces carbon emissions',
      icon: '🌍'
    }
  ];

  return (
    <section className="learn-content">
      <h2>📖 Key Topics</h2>
      <div className="learn-topics">
        {topics.map(topic => (
          <div key={topic.id} className="learn-topic">
            <span className="learn-topic__icon">{topic.icon}</span>
            <h3 className="learn-topic__title">{topic.title}</h3>
            <p className="learn-topic__description">{topic.description}</p>
            <button
              className="learn-topic__btn"
              onClick={() => handleLearnTopic(topic.title)}
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
