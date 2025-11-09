
import "../home.css"

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
                    <div className="icon">photo</div>
                    <h3 className="subtitle">text</h3>
                    <button className="button">Try it out</button>
                </div>
                <div className="card game">
                    <div className="icon">photo</div>
                    <h3 className="subtitle">text</h3>
                    <button className="button">Try it out</button>
                </div>
                <div className="card quiz">
                    <div className="icon">photo</div>
                    <h3 className="subtitle">text</h3>
                    <button className="button">Try it out</button>
                </div>
            </div>
        </section>
    );
}