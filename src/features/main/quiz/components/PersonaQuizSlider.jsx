import { useState } from 'react';
import { useCoin } from '../../../../../contexts/coins/CoinContext';

export default function PersonaQuizSlider({ quiz, onComplete, completed }) {
  const [seenNew, setSeenNew] = useState({});
  const { earnCoins } = useCoin();

  const handleClick = (quizData) => {
    setSeenNew((prev) => ({ ...prev, [quizData._id]: true }));
    
    if (!completed.includes(quizData._id)) {
      onComplete(quizData._id, quizData.coins);
      earnCoins(quizData.coins, `Completed: ${quizData.title}`);
    }
  };

  return (
    <section className="quiz-slider quiz-slider--persona">
      <div className="quiz-slider__header">
        <div className="quiz-slider__line"></div>
        <h2 className="quiz-slider__title">🌟 Personality Quizzes</h2>
        <div className="quiz-slider__line"></div>
      </div>

      <div className="quiz-slider__container">
        {quiz.map((quizData) => (
          <div
            key={quizData._id}
            className={`quiz-card ${completed.includes(quizData._id) ? 'quiz-card--completed' : ''}`}
            onClick={() => handleClick(quizData)}
          >
            {!seenNew[quizData._id] && quizData.isNew && (
              <span className="quiz-card__badge quiz-card__badge--new">🆕 NEW</span>
            )}

            {completed.includes(quizData._id) && (
              <span className="quiz-card__badge quiz-card__badge--completed">✓ DONE</span>
            )}

            <div className="quiz-card__cover">
              <div className="quiz-card__cover-icon">{getPersonalityIcon(quizData.title)}</div>
            </div>

            <div className="quiz-card__content">
              <h3 className="quiz-card__title">{quizData.title}</h3>
              
              <div className="quiz-card__meta">
                <span className="quiz-card__questions">
                  📋 {quizData.nbQsts} Questions
                </span>
              </div>

              <div className="quiz-card__footer">
                <span className="quiz-card__reward">
                  🪙 {quizData.coins} Coins
                </span>
                <button className="quiz-card__button">
                  {completed.includes(quizData._id) ? 'Retake' : 'Play'} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="quiz-slider__divider"></div>
    </section>
  );
}

function getPersonalityIcon(title) {
  const iconMap = {
    'What recycler are you': '🌍',
    'Your eco personality': '🌿',
    'Green lifestyle type': '🍃',
    'Sustainability style': '🌱',
    'Environmental habits': '♻️'
  };
  return iconMap[title] || '🎭';
}
