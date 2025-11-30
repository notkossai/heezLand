
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
//Main pages
import HomePage from './features/main/home/HomePage'
import GamesPage from './features/main/games/GamesPage'
import LearnPage from './features/main/learn/LearnPage'
import QuizPage from './features/main/quiz/QuizPage'
import AboutPage from './features/main/about/AboutPage'
//Extra pages
import Socials from './features/extras/socials/Socials'
import BlogPage from './features/extras/blog/Blog'
import FaqPage from './features/extras/faq/Faq'
import SupportPage from './features/extras/support/Support'
import OtherPage from './features/extras/other/Other'
import UnderConstruction from './features/extras/under-construction/UnderConstruction'


function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/about" element={<AboutPage />} />

                <Route path="/socials" element={<Socials />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/other" element={<OtherPage />} />
                <Route path="/under-construction" element={<UnderConstruction />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
