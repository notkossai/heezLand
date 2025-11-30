import { useState } from 'react';
import CommentsSection from './CommentsSection';

export function BookPreview({ book, onBack, coins, onBuy, isLocked, onRead }) {
  return (
    <div className="reader-view">
      <div className="reader-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span>💰 {coins}</span>
      </div>
      <div className="preview-container">
        <div className="preview-content">
          <div className="preview-icon">📚</div>
          <h1 className="preview-title">{book.title}</h1>
          <p className="preview-author">by {book.author}</p>
          
          <div className="preview-info">
            <div className="info-item">
              <span className="info-label">Pages:</span>
              <span className="info-value">{book.pages || '200+'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Category:</span>
              <span className="info-value">{book.category || 'Education'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Reading Time:</span>
              <span className="info-value">{book.readingTime || '45 mins'}</span>
            </div>
          </div>

          <p className="preview-description">{book.description || book.content?.substring(0, 200) + '...'}</p>

          <div className="preview-actions">
            {isLocked ? (
              <button className="btn-buy" onClick={onBuy}>
                🔒 Unlock for {book.coins} 🪙
              </button>
            ) : (
              <button className="btn-read" onClick={onRead}>
                📖 Read Book
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BookReader({ book, onBack, coins, comments, onAddComment, currentPage, onPageChange }) {
  const pages = book.content?.split('\n\n') || ['No content available'];
  const totalPages = pages.length;
  const maxPage = totalPages - 1;
  
  const handlePrevPage = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < maxPage) onPageChange(currentPage + 1);
  };

  return (
    <div className="reader-view">
      <div className="reader-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span>💰 {coins}</span>
      </div>
      <div className="book-reader-container">
        <div className="book-reader-header">
          <h1>{book.title}</h1>
          <p>by {book.author}</p>
        </div>

        <div className="book-page">
          {pages[currentPage]}
        </div>

        <div className="book-controls">
          <button 
            className="page-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            ← Previous
          </button>
          <span className="page-counter">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button 
            className="page-btn"
            onClick={handleNextPage}
            disabled={currentPage === maxPage}
          >
            Next →
          </button>
        </div>

        <CommentsSection 
          comments={comments}
          onAddComment={onAddComment}
          placeholder="Share your thoughts about this book..."
        />
      </div>
    </div>
  );
}

export function VideoPlayer({ video, onBack, coins, comments, onAddComment }) {
  return (
    <div className="reader-view">
      <div className="reader-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span>💰 {coins}</span>
      </div>
      <div className="video-reader-container">
        <h1 className="video-title">{video.title}</h1>
        <p className="video-meta">⏱️ {video.duration}</p>
        
        <div className="video-player-wrapper">
          <iframe
            className="video-player"
            src={`${video.videoUrl}?autoplay=1`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            title={video.title}
          ></iframe>
        </div>
        
        <p className="video-description">{video.content}</p>

        <CommentsSection 
          comments={comments}
          onAddComment={onAddComment}
          placeholder="Share your thoughts about this video..."
        />
      </div>
    </div>
  );
}