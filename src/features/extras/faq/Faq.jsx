import './faq.css';

import { useState, useEffect } from 'react';
import { useCoin } from '../../../../contexts/coins/CoinContext';
import { set } from 'mongoose';

const FAQ_ITEMS = [
  {
    id: 1,
    category: 'Recycling',
    question: 'What can I recycle?',
    answer: 'You can recycle paper, cardboard, glass, plastic bottles, aluminum cans, and many other items. Check with your local recycling program for specific guidelines.',
    coins: 5
  },
  {
    id: 2,
    category: 'Recycling',
    question: 'How do I prepare items for recycling?',
    answer: 'Rinse containers to remove food residue, flatten boxes to save space, and remove plastic bags from recycling bins as they jam machinery.',
    coins: 5
  },
  {
    id: 3,
    category: 'Environment',
    question: 'Why is recycling important?',
    answer: 'Recycling saves natural resources, reduces pollution, and helps fight climate change by requiring less energy than making products from scratch.',
    coins: 10
  },
  {
    id: 4,
    category: 'Environment',
    question: 'What is composting?',
    answer: 'Composting is turning organic waste like food scraps and leaves into nutrient-rich soil that can be used for gardening.',
    coins: 10
  },
  {
    id: 5,
    category: 'Beginner',
    question: 'How can kids help with recycling?',
    answer: 'Kids can sort recyclables, educate others about recycling, reduce waste, and participate in community cleanup events.',
    coins: 5
  },
  {
    id: 6,
    category: 'Beginner',
    question: 'What are Heez Land coins?',
    answer: 'Heez Land coins are rewards for learning about recycling, reading educational content, and making eco-friendly choices!',
    coins: 5
  }
];

export default function FaqPage() {
  const [activeId, setActiveId] = useState(null);
  const [viewedFaqs, setViewedFaqs] = useState(new Set());
  const { earnCoins } = useCoin();

  useEffect(() => {
    const saved = localStorage.getItem("viewedFaqs");
    if (saved){
      setViewedFaqs(new Set(JSON.parse(saved)));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("viwedFaqs", JSON.stringify([...viewedFaqs]));
  }, [viewedFaqs])

  const handleToggle = (id, coins) => {
    if (activeId !== id && !viewedFaqs.has(id)) {
      earnCoins(coins, 'Learned from FAQ');
      setViewedFaqs(prev => new Set(prev).add(id));
    }
    setActiveId(activeId === id ? null : id);
  };

  const categories = ['All', ...new Set(FAQ_ITEMS.map(item => item.category))];

  return (
    <main className="faq-page">
      <h1>❓ Frequently Asked Questions</h1>
      <p>Find answers to all your recycling questions!</p>

      <div className="faq-container">
        <div className="faq-intro">
          <h3>Welcome to our FAQ!</h3>
          <p>Click on any question to learn the answer and earn coins! 🪙</p>
        </div>

        <div className="faq-items">
          {FAQ_ITEMS.map(item => (
            <div
              key={item.id}
              className={`faq-item ${activeId === item.id ? 'active' : ''}`}
            >
              <div
                className="faq-item__header"
                onClick={() => handleToggle(item.id, item.coins)}
              >
                <h4 className="faq-item__question">{item.question}</h4>
                <span className="faq-item__icon">▼</span>
              </div>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
                <span className="faq-item__coins">
                  {viewedFaqs.has(item.id) ? '✓ Claimed' : `+${item.coins} coins`}
                </span>
                {/* TO DO */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
