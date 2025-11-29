import { useState } from 'react';
import { useCoin } from '../../../../contexts/coins/CoinContext';
import HeroSection from './components/HeroSection';
import GeneralQuizSlider from './components/GeneralQuizSlider';
import PersonaQuizSlider from './components/PersonaQuizSlider';
import './quiz.css';

import generalQuiz from './components/mockGeneralQuiz';
import personaQuiz from './components/mockPersonaQuiz';

export default function QuizPage() {
  const { earnCoins } = useCoin();
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  const handleQuizComplete = (quizId, coins) => {
    if (!completedQuizzes.includes(quizId)) {
      setCompletedQuizzes([...completedQuizzes, quizId]);
      earnCoins(coins, `Completed Quiz #${quizId}`);
    }
  };

  return (
    <main className="quiz-page">
      <HeroSection />
      <GeneralQuizSlider 
        quiz={generalQuiz} 
        onComplete={handleQuizComplete}
        completed={completedQuizzes}
      />
      <PersonaQuizSlider 
        quiz={personaQuiz}
        onComplete={handleQuizComplete}
        completed={completedQuizzes}
      />
    </main>
  );
}
