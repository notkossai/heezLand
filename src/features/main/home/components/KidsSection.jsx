// TO DO
// text 

import "../home.css"
import { Link } from "react-router-dom";

import LearnSvg from "@/assets/icons/book.svg?react"
import GameSvg from "@/assets/icons/console.svg?react"
import QuizSvg from "@/assets/icons/brain.svg?react"


export default function KidsSection() {
    return (
        <section className="kids-section">
            <div className="hero">
                <h1 className="title">GAMES LAND</h1>
                <p className="subtitle">Explore, Learn & Play
                    - Become a Hero for the Planet!</p>
            </div>
            <div className="kids-cards">
                <div className=" card learn">
                    <div className="icon"><LearnSvg /></div>
                    <h3 className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <Link to={"/learn"}><button className="button">Try it out</button></Link>
                    
                </div>
                <div className="card game">
                    <div className="icon"><GameSvg /></div>
                    <h3 className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <Link to={"/games"}><button className="button">Try it out</button></Link>
                </div>
                <div className="card quiz">
                    <div className="icon"><QuizSvg /></div>
                    <h3 className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <Link to={"/quiz"}><button className="button">Try it out</button></Link>
                </div>
            </div>
        </section>
    );
}