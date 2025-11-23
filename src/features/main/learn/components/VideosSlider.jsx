import { useState } from "react";
import videos from "./mockVideos";

export default function VideosSlider({ videos }) {
  const [seenNew, setSeenNew] = useState({});

  const handleClick = (id) => {
    setSeenNew((prev) => ({ ...prev, [id]: true }));
  };

  const handleReward = (id) => {
    alert("reward claimed for video!");
  };

  const videoList = videos || [];

  return (
    <main className="videos-slider">
        <div className="section-title-row">
  <div className="section-line"></div>
  <span className="section-title">Videos</span>
  <div className="section-line"></div>
</div>
      <div className="videosContainer">
        {videoList.map((video) => (
          <div
            className="videoCard"
            key={video._id}
            onClick={() => handleClick(video._id)}
          >
            {!seenNew[video._id] && video.isNew && (
              <span className="new-tag">NEW</span>
            )}
            
            <h2 className="title">{video.title}</h2>
            <h3 className="duration">{video.duration}</h3>
            <div className="cover">
              <img src={video.cover.replace('.mp4', '.jpg')} alt={video.title} />
            </div>
            <button
              className="coin-reward"
              disabled={video.completed}
              onClick={(e) => {
                e.stopPropagation();
                if (!video.completed) handleReward(video._id);
              }}
            >
              +{video.coins}
            </button>
            
          </div>
        ))}
      </div>
      <div className="section-title-row">
      <div className="section-line"></div>
     </div>
    </main>
  );
}