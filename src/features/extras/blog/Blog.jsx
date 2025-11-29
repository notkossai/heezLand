import { useCoin } from '../../../../contexts/coins/CoinContext';
import './blog.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'How to Sort Your Recyclables',
    description: 'Learn the proper way to sort plastic, paper, and glass for recycling.',
    category: 'Beginner',
    date: 'Jan 15, 2025',
    coins: 10,
    icon: '♻️',
    content: 'Proper sorting ensures recyclables get processed correctly...'
  },
  {
    id: 2,
    title: 'Composting 101',
    description: 'Discover how to create your own compost at home.',
    category: 'Intermediate',
    date: 'Jan 10, 2025',
    coins: 15,
    icon: '🌱',
    content: 'Composting turns organic waste into nutrient-rich soil...'
  },
  {
    id: 3,
    title: 'Plastic-Free Living',
    description: 'Tips for reducing plastic waste in your daily life.',
    category: 'Advanced',
    date: 'Jan 5, 2025',
    coins: 20,
    icon: '🌍',
    content: 'Here are practical ways to eliminate single-use plastics...'
  },
  {
    id: 4,
    title: 'Water Saving Tips',
    description: 'Easy ways to conserve water at home.',
    category: 'Beginner',
    date: 'Dec 28, 2024',
    coins: 10,
    icon: '💧',
    content: 'Conserving water protects our planet for future generations...'
  },
  {
    id: 5,
    title: 'E-Waste Recycling',
    description: 'Where and how to recycle old electronics.',
    category: 'Intermediate',
    date: 'Dec 20, 2024',
    coins: 15,
    icon: '💻',
    content: 'Electronic waste contains valuable materials that can be recovered...'
  },
  {
    id: 6,
    title: 'Sustainable Fashion',
    description: 'Making eco-friendly choices in your wardrobe.',
    category: 'Intermediate',
    date: 'Dec 15, 2024',
    coins: 15,
    icon: '👕',
    content: 'Sustainable fashion means choosing clothes that are good for the planet...'
  }
];

export default function BlogPage() {
  const { earnCoins } = useCoin();

  const handleReadMore = (post) => {
    earnCoins(post.coins, `Read blog: ${post.title}`);
  };

  return (
    <main className="blog-page">
      <h1>🌿 Learn About Recycling</h1>
      <p>Discover amazing tips and facts about keeping our planet clean!</p>

      <div className="blog-featured">
        <h3>🌟 Featured Article</h3>
        <p>{BLOG_POSTS.title} - Earn {BLOG_POSTS.coins} coins!</p>
      </div>

      <div className="blog-container">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-card__image">{post.icon}</div>
            <div className="blog-card__content">
              <span className="blog-card__tag">{post.category}</span>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__description">{post.description}</p>
              <div className="blog-card__meta">
                <span className="blog-card__date">{post.date}</span>
                <span className="blog-card__coins">🪙 {post.coins}</span>
              </div>
              <button 
                className="blog-card__read-more"
                onClick={() => handleReadMore(post)}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
