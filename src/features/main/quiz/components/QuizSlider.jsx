import { useState } from 'react';
import quiz from "./mockQuizzes";

export default function QuizSlider({quiz}) {
 const [seenNew, setSeenNew] = useState({});

     const handleClick = (id) => {
        setSeenNew((prev) => ({...prev, [id]:true}));
     }

    return(
        <main className="quiz-slider">
            <div className="section-title-row">
  <div className="section-line"></div>
  <span className="section-title">Quiz Land</span>
  <div className="section-line"></div>
</div>
            <div className="quizContainer">
                {quiz.map((quiz) => (
                    <div 
                    className="quizCard"
                    key={quiz._id}
                    onClick={() => 
                        handleClick(quiz._id)}>
                        {!seenNew[quiz._id] && quiz.isNew && (
                            <span className="new-tag">NEW</span>
                        )}
                    
                <div className="cover">
                    <img src={quiz.cover} alt={quiz.title}/>
                </div>
                <h2 className="title">{quiz.title}</h2>
                <div className="cardBottom-wrapper"> <h3 className="qstsNumber">{quiz.nbQsts} questions</h3>
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
