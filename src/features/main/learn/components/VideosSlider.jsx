import { useState } from 'react';
import { useCoin } from '../../../../../contexts/coins/CoinContext';
import mockVideos from './mockVideos';

export default function VideosSlider() {
  const [scroll, setScroll] = useState(0);
  const { earnCoins } = useCoin();

  const handleWatchVideo = (videoTitle) => {
    earnCoins(10, `Watched: ${videoTitle}`);
  };

  const handleScroll = (direction) => {
    setScroll(prev => prev + (direction === 'left' ? -300 : 300));
  };

  return (
    <section className="learn-videos">
      <h2>📹 Educational Videos</h2>
      <div className="slider">
        <button className="slider__arrow slider__arrow--left" onClick={() => handleScroll('left')}>
          ←
        </button>
        
        <div className="slider__container">
          <div className="slider__content" style={{ transform: `translateX(${scroll}px)` }}>
            {mockVideos.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-card__thumbnail">▶️</div>
                <h3 className="video-card__title">{video.title}</h3>
                <p className="video-card__duration">{video.duration}</p>
                <button
                  className="video-card__button"
                  onClick={() => handleWatchVideo(video.title)}
                >
                  Watch Now
                </button>
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
