import { useState } from 'react';

function VideoCard({ video, onSelect, isNew, onDismissNew }) {
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
      <div className="card-cover">🎬</div>
      <h3 className="card-title">{video.title}</h3>
      <p className="card-author">⏱️ {video.duration}</p>
      <div className="card-footer">
        <span className="card-free">🆓</span>
      </div>
    </div>
  );
}

export default function VideosSlider({ 
  videos, 
  videoFilter, 
  onFilterChange, 
  onSelectVideo, 
  dismissedNewBadges,
  onDismissNewBadge,
  scroll,
  onScroll 
}) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'All Videos' },
    { value: 'newest', label: 'Newest → Oldest' },
    { value: 'oldest', label: 'Oldest → Newest' },
    { value: 'new', label: 'New 🆕' }
  ];

  const handleFilterChange = (value) => {
    onFilterChange(value);
    setShowFilterMenu(false);
  };

  const currentFilterLabel = filterOptions.find(f => f.value === videoFilter)?.label || 'Filter';

  return (
    <div className="learn-videos">
      <h2>🎬 Video Tutorials</h2>
      
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
                className={`filter-dropdown-item ${videoFilter === option.value ? 'active' : ''}`}
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
              {videos.map(video => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onSelect={() => onSelectVideo(video)}
                  isNew={video.isNew && !dismissedNewBadges.includes(`video-${video.id}`)}
                  onDismissNew={() => onDismissNewBadge(video.id, 'video')}
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