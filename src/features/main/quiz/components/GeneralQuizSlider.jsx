import { useState } from 'react';
import { useCoin } from '../../../../../contexts/coins/CoinContext';

export default function GeneralQuizSlider({ quiz, onComplete, completed }) {
  const [seenNew, setSeenNew] = useState({});
  const { earnCoins } = useCoin();

  const handleClick = (quizData) => {
    setSeenNew((prev) => ({ ...prev, [quizData._id]: true }));
    
    // Simulate quiz completion - in real app, would navigate to quiz modal
    if (!completed.includes(quizData._id)) {
      onComplete(quizData._id, quizData.coins);
      earnCoins(quizData.coins, `Completed: ${quizData.title}`);
    }
  };

  return (
    <section className="quiz-slider quiz-slider--general">
      <div className="quiz-slider__header">
        <div className="quiz-slider__line"></div>
        <h2 className="quiz-slider__title">🧠 General Knowledge Quizzes</h2>
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
              <div className="quiz-card__cover-icon">{getQuizIcon(quizData.title)}</div>
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

function getQuizIcon(title) {
  const iconMap = {
    'U.S. presidents': '🏛️',
    'Lynx': '🐱',
    'All things panda': '🐼',
    'Giraffes': '🦒',
    'Recycling': '♻️',
    'Animals': '🦁',
    'Nature': '🌿'
  };
  return iconMap[title] || '🎯';
}
