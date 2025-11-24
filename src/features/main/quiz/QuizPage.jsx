
import "./quiz.css";
import HeroSection from "./components/HeroSection";
import QuizzesSlider from "./components/QuizSlider";
import quiz from "./components/mockQuizzes";

export default function QuizPage(){
    return(
        <main className="quiz-page">
            <HeroSection />
            <QuizzesSlider quiz={quiz} />
        </main>
    );
}
