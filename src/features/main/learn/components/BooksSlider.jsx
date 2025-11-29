import { useState } from 'react';
import mockBooks from './mockBooks';

export default function BooksSlider({ onSelectBook }) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = (direction) => {
    setScroll(prev => prev + (direction === 'left' ? -300 : 300));
  };

  return (
    <section className="learn-books">
      <h2>📕 Educational Books</h2>
      <div className="slider">
        <button className="slider__arrow slider__arrow--left" onClick={() => handleScroll('left')}>
          ←
        </button>
        
        <div className="slider__container">
          <div className="slider__content" style={{ transform: `translateX(${scroll}px)` }}>
            {mockBooks.map(book => (
              <div key={book.id} className="book-card" onClick={() => onSelectBook(book)}>
                <div className="book-card__cover">📚</div>
                <h3 className="book-card__title">{book.title}</h3>
                <p className="book-card__author">by {book.author}</p>
                <div className="book-card__coins">🪙 {book.coins}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider__arrow slider__arrow--right" onClick={() => handleScroll('right')}>
          →
        </button>
      </div>
    </section>
  );
}
