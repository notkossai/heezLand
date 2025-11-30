import { useState } from 'react';

export default function CommentsSection({ comments, onAddComment, placeholder = "Share your thoughts..." }) {
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <div className="comments-section">
      <h3 className="comments-header">💬 Comments</h3>
      <div className="comments-list">
        {comments.length === 0 ? (
          <p style={{ color: '#626c7c', textAlign: 'center' }}>Be the first to comment!</p>
        ) : (
          comments.map((c, idx) => (
            <div key={idx} className="comment">
              <div>
                <span className="comment-author">{c.author}</span>
                <span className="comment-date">{c.date}</span>
              </div>
              <div className="comment-text">{c.text}</div>
            </div>
          ))
        )}
      </div>
      <div className="comment-form">
        <textarea
          className="comment-input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={placeholder}
        />
        <button className="comment-btn" onClick={handleAddComment}>
          Post Comment 💬
        </button>
      </div>
    </div>
  );
}