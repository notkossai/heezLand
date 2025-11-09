
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import HomePage from "./features/main/home/HomePage";
import LearnPage from "./features/main/learn/LearnPage";
import GamesPage from "./features/main/games/GamesPage";
import QuizPage from "./features/main/quiz/QuizPage";
import AboutPage from "./features/main/about/AboutPage";

import BlogPage from "./features/extras/blog/Blog";
import FaqPage from "./features/extras/faq/Faq";
import SocialsPage from "./features/extras/socials/Socials";
import SupportPage from "./features/extras/support/Support";
import OtherPage from "./features/extras/other/Other";



export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"
                    element={
                        <>
                           
                            <HomePage />
                        </>
                    } />

                <Route path="/games"
                    element={
                        <>
                            <NavBar showCoins={true} />
                            <GamesPage />
                        </>
                    }></Route>

                <Route path="/learn"
                    element={
                        <>
                            <NavBar showCoins={true} />
                            <LearnPage />
                        </>
                    }></Route>

                <Route path="/quiz"
                    element={
                        <>
                            <NavBar showCoins={true} />
                            <QuizPage />
                        </>
                    }></Route>

                <Route path="/about"
                    element={
                        <>
                            <NavBar showCoins={false} />
                            <AboutPage />
                        </>
                    } />

                <Route path="/blog"
                    element={
                        <>
                            <NavBar showCoins={false} />
                            <BlogPage />
                        </>
                    }></Route>

                <Route path="/faq"
                    element={
                        <>
                            <NavBar showCoins={false} />
                            <FaqPage />
                        </>
                    }></Route>

                <Route path="/socials"
                    element={
                        <>
                            <NavBar showCoins={false} />
                            <SocialsPage />
                        </>
                    }></Route>

                <Route path="/support"
                    element={
                        <>
                            <NavBar showCoins={false} />
                            <SupportPage />
                        </>
                    }></Route>

                <Route path="/other"
                    element={
                        <>
                            <NavBar showCoins={false} />
                            <OtherPage />
                        </>
                    }></Route>
            </Routes>
                            <Footer />
        </Router>
    );
}