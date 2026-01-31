import { useNavigate } from "react-router-dom";
import { useRef } from "react";

// 🎯 Dummy data arrays (different feel)
const dummyChannels = [
  "Code With Bhai",
  "Frontend King",
  "JS Master",
  "React Hindi",
  "MERN Stack",
  "Web Dev Simplified",
];

const dummyViews = [
  "1.2K views",
  "8.5K views",
  "12K views",
  "105K views",
  "230K views",
  "1.1M views",
];

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // 🔥 random index (stable for render)
  const randomIndex =
    video._id?.charCodeAt(0) % dummyChannels.length || 0;

  return (
    <div
      onClick={() => navigate(`/watch/${video._id}`)}
      className="cursor-pointer"
    >
      {/* 🎥 VIDEO PREVIEW CARD */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        muted
        preload="metadata"
        className="w-full h-44 object-cover rounded-lg bg-black"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          videoRef.current?.pause();
          videoRef.current.currentTime = 0;
        }}
      />

      {/* 📄 VIDEO INFO */}
      <div className="mt-2">
        <h3 className="font-semibold text-sm text-black line-clamp-2">
          {video.title}
        </h3>

        {/* CHANNEL NAME (DUMMY) */}
        <p className="text-gray-700 text-sm mt-1">
          {video.channel?.channelName ||
            dummyChannels[randomIndex]}
        </p>

        {/* VIEWS (DUMMY) */}
        <p className="text-gray-500 text-xs">
          {video.views ||
            dummyViews[randomIndex]}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
