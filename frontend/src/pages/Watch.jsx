import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../utils/api";
import Comments from "../components/video/Comments";

// ✅ React Icons
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineEye,
} from "react-icons/ai";

const Watch = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 All videos (for suggestions)
  const { videos } = useSelector((state) => state.video);

  // 🔹 Fetch single video
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await api.get(`/videos/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.error("Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-gray-500">Loading video...</div>;
  }

  if (!video) {
    return <div className="p-4 text-red-500">Video not found</div>;
  }

  // 🔹 Suggested videos (exclude current)
  const suggestedVideos = videos.filter(
    (v) => v._id !== video._id
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2">
          {/* 🎥 VIDEO PLAYER */}
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
            <video
              src={video.videoUrl}
              controls
              className="w-full h-full"
            />
          </div>

          {/* 📌 VIDEO INFO */}
          <h1 className="mt-4 text-lg font-semibold text-black">
            {video.title}
          </h1>

          <p className="text-black mt-1">
            {video.channel?.channelName}
          </p>

          {/* 👍 👎 👁 ACTION BUTTONS (DUMMY) */}
          <div className="mt-4 flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black">
              <AiOutlineLike size={20} className="text-black" />
              <span className="text-sm font-medium text-black">
                Like
              </span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black">
              <AiOutlineDislike size={20} className="text-black" />
              <span className="text-sm font-medium text-black">
                Dislike
              </span>
            </button>

            <div className="flex items-center gap-2 text-black">
              <AiOutlineEye size={20} className="text-black" />
              <span className="text-sm font-medium text-black">
                {video.views} views
              </span>
            </div>
          </div>

          {/* 💬 COMMENTS */}
          <Comments />
        </div>

        {/* ================= RIGHT SIDE (SUGGESTIONS) ================= */}
        <div className="space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {suggestedVideos.map((v) => (
            <div
              key={v._id}
              className="flex gap-3 cursor-pointer"
              onClick={() => navigate(`/watch/${v._id}`)}
            >
              {/* 🎬 VIDEO PREVIEW */}
              <video
                src={v.videoUrl}
                muted
                preload="metadata"
                className="w-40 h-24 object-cover rounded-lg bg-black"
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />

              {/* 📄 INFO */}
              <div className="flex-1 text-black">
                <h3 className="text-sm font-semibold line-clamp-2">
                  {v.title}
                </h3>

                <p className="text-xs mt-1">
                  {v.channel?.channelName}
                </p>

                <p className="text-xs">
                  {v.views} views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
