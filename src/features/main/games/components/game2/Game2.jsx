import { useState } from 'react';
import { useCoin } from '../../../../../../contexts/coins/CoinContext';

import './game2.css';

const RECYCLING_FACTS = [
  {
    id: 1,
    question: 'How long does plastic take to decompose?',
    options: ['1 year', '100 years', '500+ years', '10 years'],
    correct: 2,
    fact: 'Plastic can take over 500 years to decompose!'
  },
  {
    id: 2,
    question: 'What percentage of waste can be recycled?',
    options: ['25%', '50%', '75%', '90%'],
    correct: 2,
    fact: 'Up to 75% of waste can be recycled!'
  },
  {
    id: 3,
    question: 'How many times can aluminum be recycled?',
    options: ['Once', '5 times', 'Infinitely', '10 times'],
    correct: 2,
    fact: 'Aluminum can be recycled infinitely without losing quality!'
  },
  {
    id: 4,
    question: 'How much water does it take to make one cotton shirt?',
    options: ['100 liters', '500 liters', '2,700 liters', '1,000 liters'],
    correct: 2,
    fact: 'Making one cotton shirt requires about 2,700 liters of water!'
  },
  {
    id: 5,
    question: 'What is the most recycled metal?',
    options: ['Iron', 'Copper', 'Aluminum', 'Steel'],
    correct: 2,
    fact: 'Aluminum is the most recycled metal in the world!'
  }
];

export default function Game2() {
  const [screen, setScreen] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { earnCoins } = useCoin();

  const question = RECYCLING_FACTS[currentQuestion];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === question.correct) {
      setScore(prev => prev + 10);
    }
    setTimeout(() => {
      if (currentQuestion < RECYCLING_FACTS.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        finishQuiz();
      }
    }, 1500);
  };

  const finishQuiz = () => {
    earnCoins(score, 'Completed Recycling Quiz');
    setScreen('result');
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setScreen('welcome');
  };

  return (
    <div className="game2-page">
      {screen === 'welcome' && (
        <div className="game2-welcome">
          <h1>🌍 Recycling Quiz</h1>
          <p>Test your recycling knowledge!</p>
          <button 
            className="game2-btn game2-btn--primary"
            onClick={() => setScreen('quiz')}
          >
            Start Quiz 🚀
          </button>
        </div>
      )}

      {screen === 'quiz' && (
        <div className="game2-quiz">
          <div className="game2-quiz__header">
            <span className="game2-quiz__progress">
              Question {currentQuestion + 1}/{RECYCLING_FACTS.length}
            </span>
            <span className="game2-quiz__score">Score: {score}</span>
          </div>

          <div className="game2-quiz__content">
            <h2 className="game2-quiz__question">{question.question}</h2>
            
            <div className="game2-options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`game2-option ${
                    selectedAnswer !== null
                      ? index === question.correct
                        ? 'game2-option--correct'
                        : selectedAnswer === index
                        ? 'game2-option--wrong'
                        : ''
                      : ''
                  }`}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className="game2-feedback">
                <p className="game2-feedback__fact">
                  💡 {question.fact}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {screen === 'result' && (
        <div className="game2-result">
          <h1>🎉 Quiz Complete!</h1>
          <p className="game2-result__score">
            You scored: {score}/{RECYCLING_FACTS.length * 10}
          </p>
          <p className="game2-result__coins">
            🪙 {score} Coins Earned!
          </p>
          <button 
            className="game2-btn game2-btn--primary"
            onClick={resetQuiz}
          >
            Try Again 🔄
          </button>
        </div>
      )}
    </div>
  );
}
