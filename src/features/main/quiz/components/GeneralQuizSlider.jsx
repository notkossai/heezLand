import { useState } from 'react';
import generalQuiz from "./mockGeneralQuiz";

export default function GeneralQuizSlider({quiz}) {
 const [seenNew, setSeenNew] = useState({});

     const handleClick = (id) => {
        setSeenNew((prev) => ({...prev, [id]:true}));
     }

    return(
        <main className="general quiz-slider">
            <div className="section-title-row">
  <div className="section-line"></div>
  <span className="section-title">Quiz Land</span>
  <div className="section-line"></div>
</div>
            <div className="quizContainer">
                {quiz.map((generalQuiz) => (
                    <div 
                    className="quizCard"
                    key={generalQuiz._id}
                    onClick={() => 
                        handleClick(generalQuiz._id)}>
                        {!seenNew[generalQuiz._id] && generalQuiz.isNew && (
                            <span className="new-tag">NEW</span>
                        )}
                    
                <div className="cover">
                    <img src={generalQuiz.cover} alt={generalQuiz.title}/>
                </div>
                <h2 className="title">{generalQuiz.title}</h2>
                <div className="cardBottom-wrapper"> <h3 className="qstsNumber">{generalQuiz.nbQsts} questions</h3>
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
