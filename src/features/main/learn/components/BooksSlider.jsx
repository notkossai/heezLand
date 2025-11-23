import books from "./mockBooks";

import { set } from "mongoose";
import { useState } from "react";

export default function BooksSlider({books}){
     const [seenNew, setSeenNew] = useState({});

     const handleClick = (id) => {
        setSeenNew((prev) => ({...prev, [id]:true}));
     }

     const handleReward = (id) => {
        alert("reward claimed!");
     }

    return(
        <main className="books-slider">
            <div className="section-title-row">
  <div className="section-line"></div>
  <span className="section-title">Books</span>
  <div className="section-line"></div>
</div>
            <div className="booksContainer">
                {books.map((book) => (
                    <div 
                    className="bookCard"
                    key={book._id}
                    onClick={() => 
                        handleClick(book._id)}>
                        {!seenNew[book._id] && book.isNew && (
                            <span className="new-tag">NEW</span>
                        )}
                    
                <div className="cover">
                    <img src={book.cover} alt={book.title}/>
                </div>
                <h2 className="title">{book.title}</h2>
                <div className="cardBottom-wrapper"> <h3 className="pagesNumber">{book.pages} pages</h3>
                <button 
                className="coin-reward"
                disabled={book.completed} 
                onClick={(e) => {
                    e.stopPropagation();
                    if (!book.completed) handleReward(book._id);
                }}>+{book.coins}</button> </div>
               
            </div>
                ))}
                </div>
<div className="section-title-row">
      <div className="section-line"></div>
     </div>
        </main>
    );
}