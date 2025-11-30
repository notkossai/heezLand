import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './under-construction.css';

export default function UnderConstructionPage() {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <main className="under-construction">
      {/* Back button positioned at top left */}
      <button 
        className="under-construction__back-btn"
        onClick={handleGoBack}
        title="Go back to previous page"
      >
        ← Back
      </button>

      <div className="under-construction__container">
        <div className="under-construction__content">
          <div className="under-construction__icon">🚧</div>
          
          <h1 className="under-construction__title">Coming Soon...</h1>
          
          <p className="under-construction__description">
            This exciting feature is currently under construction. We're working hard to bring you something amazing!
          </p>
          
          <div className="under-construction__progress">
            <div className="under-construction__bar"></div>
            <p className="under-construction__status">65% Complete</p>
          </div>

          <div className="under-construction__actions">
            <button 
              className="under-construction__button under-construction__button--primary"
              onClick={handleGoHome}
            >
              Back to Home
            </button>
          </div>

          {/* Old card style info section */}
          <div className="under-construction__info-card">
            <h3>What to expect:</h3>
            <ul>
              <li>✨ Brand new features</li>
              <li>🎯 Better user experience</li>
              <li>🚀 More rewards and opportunities</li>
              <li>💡 Interactive content</li>
            </ul>
          </div>
        </div>

        <div className="under-construction__animation">
          <div className="crane"></div>
          <div className="brick brick--1"></div>
          <div className="brick brick--2"></div>
          <div className="brick brick--3"></div>
        </div>
      </div>
    </main>
  );
}