import { useState } from 'react';
import { useCoin } from '../../../../../contexts/coins/CoinContext';

export default function CommentsSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Alex',
      text: 'This was very helpful! I learned so much!',
      date: '2 hours ago'
    },
    {
      id: 2,
      author: 'Jordan',
      text: 'Great content! Now I understand recycling better.',
      date: '1 day ago'
    }
  ]);
  
  const [newComment, setNewComment] = useState('');
  const { earnCoins } = useCoin();

  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        author: 'You',
        text: newComment,
        date: 'Just now'
      }]);
      earnCoins(5, 'Posted a comment');
      setNewComment('');
    }
  };

  return (
    <section className="comments-section">
      <h3>💬 Comments & Discussion</h3>
      
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment__header">
              <strong className="comment__author">{comment.author}</strong>
              <span className="comment__date">{comment.date}</span>
            </div>
            <p className="comment__text">{comment.text}</p>
          </div>
        ))}
      </div>

      <div className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="comment-form__input"
        />
        <button
          onClick={handlePostComment}
          className="comment-form__button"
        >
          Post Comment 💬
        </button>
      </div>
    </section>
  );
}
