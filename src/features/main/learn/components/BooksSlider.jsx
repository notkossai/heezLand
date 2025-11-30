import { useState } from 'react';

function BookCard({ book, onSelect, isNew, onDismissNew, isPurchased }) {
  const isUnlocked = !book.locked || isPurchased;
  
  return (
    <div className="card-item" onClick={onSelect}>
      {isNew && (
        <span 
          className="new-badge" 
          onClick={(e) => { e.stopPropagation(); onDismissNew(); }}
        >
          NEW
        </span>
      )}
      <div className="card-cover">📚</div>
      <h3 className="card-title">{book.title}</h3>
      <p className="card-author">by {book.author}</p>
      <div className="card-footer">
        {isUnlocked ? (
          <span className="card-price">🪙 {book.coins}</span>
        ) : (
          <span className="card-locked">🔒</span>
        )}
      </div>
    </div>
  );
}

export default function BooksSlider({ 
  books, 
  bookFilter, 
  onFilterChange, 
  onSelectBook, 
  dismissedNewBadges,
  onDismissNewBadge,
  scroll,
  onScroll,
  purchasedBooks
}) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'All Books' },
    { value: 'newest', label: 'Newest → Oldest' },
    { value: 'oldest', label: 'Oldest → Newest' },
    { value: 'unlocked', label: 'Unlocked' },
    { value: 'locked', label: 'Locked' },
    { value: 'new', label: 'New 🆕' }
  ];

  const handleFilterChange = (value) => {
    onFilterChange(value);
    setShowFilterMenu(false);
  };

  const currentFilterLabel = filterOptions.find(f => f.value === bookFilter)?.label || 'Filter';

  return (
    <div className="learn-books">
      <h2>📕 Educational Books</h2>
      
      <div className="filter-container">
        <button 
          className="filter-dropdown-btn"
          onClick={() => setShowFilterMenu(!showFilterMenu)}
        >
          ⚙️ {currentFilterLabel} ▼
        </button>
        {showFilterMenu && (
          <div className="filter-dropdown-menu">
            {filterOptions.map(option => (
              <button
                key={option.value}
                className={`filter-dropdown-item ${bookFilter === option.value ? 'active' : ''}`}
                onClick={() => handleFilterChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="slider-wrapper">
        <div className="slider">
          <button className="slider-arrow" onClick={() => onScroll('left')}>←</button>
          <div className="slider-container">
            <div className="slider-content" style={{ transform: `translateX(${scroll}px)` }}>
              {books.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onSelect={() => onSelectBook(book)}
                  isNew={book.isNew && !dismissedNewBadges.includes(`book-${book.id}`)}
                  onDismissNew={() => onDismissNewBadge(book.id, 'book')}
                  isPurchased={purchasedBooks.includes(book.id)}
                />
              ))}
            </div>
          </div>
          <button className="slider-arrow" onClick={() => onScroll('right')}>→</button>
        </div>
      </div>
    </div>
  );
}