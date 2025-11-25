import { useState } from 'react';
import personaQuiz from './mockPersonaQuiz';

export default function PersonaQuizSlider({quiz}) {
 const [seenNew, setSeenNew] = useState({});

     const handleClick = (id) => {
        setSeenNew((prev) => ({...prev, [id]:true}));
     }

    return(
        <main className="persona quiz-slider">
            <div className="section-title-row">
  <div className="section-line"></div>
  <span className="section-title">Personality Test</span>
  <div className="section-line"></div>
</div>
            <div className="quizContainer">
                {quiz.map((personaQuiz) => (
                    <div 
                    className="quizCard"
                    key={personaQuiz._id}
                    onClick={() => 
                        handleClick(personaQuiz._id)}>
                        {!seenNew[personaQuiz._id] && personaQuiz.isNew && (
                            <span className="new-tag">NEW</span>
                        )}
                    
                <div className="cover">
                    <img src={personaQuiz.cover} alt={personaQuiz.title}/>
                </div>
                <h2 className="title">{personaQuiz.title}</h2>
                <div className="cardBottom-wrapper"> <h3 className="qstsNumber">{personaQuiz.nbQsts} questions</h3>
               </div>
               
            </div>
                ))}
                </div>
<div className="section-title-row">
      <div className="section-line"></div>
     </div>
        </main>
    );
}
