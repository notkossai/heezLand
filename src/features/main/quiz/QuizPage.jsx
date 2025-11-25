
import "./quiz.css";
import HeroSection from "./components/HeroSection";
import GeneralQuizSlider from "./components/GeneralQuizSlider";
import PersonaQuizSlider from "./components/PersonaQuizSlider";

import generalQuiz from "./components/mockGeneralQuiz";
import personaQuiz from "./components/mockPersonaQuiz";

export default function QuizPage(){    
    return(
        <main className="quiz-page">
            <HeroSection />
            <GeneralQuizSlider quiz={generalQuiz} />
            <PersonaQuizSlider quiz={personaQuiz} />
        </main>
    );
}
