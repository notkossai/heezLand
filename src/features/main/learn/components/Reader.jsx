import { useState } from 'react';
import { useCoin } from '../../../../../contexts/coins/CoinContext';
import CommentsSection from './CommentsSection';

export default function Reader({ book, onBack }) {
  const [currentPage, setCurrentPage] = useState(0);
  const { earnCoins } = useCoin();
  
  const pages = book.content.split('\n\n');

  const handleFinishReading = () => {
    earnCoins(book.coins, `Finished reading: ${book.title}`);
  };

  const isLastPage = currentPage === pages.length - 1;

  return (
    <div className="reader">
      <button className="reader__back" onClick={onBack}>← Back to Books</button>
      
      <div className="reader__container">
        <h1 className="reader__title">{book.title}</h1>
        <p className="reader__author">by {book.author}</p>

        <div className="reader__content">
          {pages[currentPage]}
        </div>

        <div className="reader__controls">
          <button
            className="reader__button reader__button--prev"
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
          >
            ← Previous
          </button>

          <span className="reader__page-count">
            Page {currentPage + 1} of {pages.length}
          </span>

          <button
            className="reader__button reader__button--next"
            onClick={() => {
              if (isLastPage) {
                handleFinishReading();
              } else {
                setCurrentPage(prev => Math.min(pages.length - 1, prev + 1));
              }
            }}
          >
            {isLastPage ? 'Finish Reading ✓' : 'Next →'}
          </button>
        </div>

        {isLastPage && <CommentsSection />}
      </div>
    </div>
  );
}
