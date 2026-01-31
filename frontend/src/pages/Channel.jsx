import { useEffect, useState } from "react";
import api from "../utils/api";
import { useSelector } from "react-redux";

const Channel = () => {
  const { user } = useSelector((state) => state.auth);

  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("Education");
  const [loading, setLoading] = useState(false);

  // 🔥 Load channel videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await api.get("/videos");
        setVideos(res.data);
      } catch (err) {
        console.error("Failed to load videos");
      }
    };

    fetchVideos();
  }, []);

  // 🔥 Upload video (backend)
  const handleUpload = async () => {
    if (!title || !thumbnailUrl || !videoUrl) return;

    try {
      setLoading(true);

      await api.post("/videos", {
        title,
        thumbnailUrl,
        videoUrl,
        category,
        channelId: user.channels?.[0], // first channel
      });

      // refresh videos
      const res = await api.get("/videos");
      setVideos(res.data);

      setTitle("");
      setThumbnailUrl("");
      setVideoUrl("");
    } catch (err) {
      alert("Video upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-black text-white">
      {/* Channel Header */}
      <div className="h-40 bg-gradient-to-r from-gray-800 to-gray-900"></div>

      <div className="p-4">
        <h1 className="text-2xl font-bold">
          {user?.username}'s Channel
        </h1>
      </div>

      {/* Upload Section */}
      <div className="px-4 py-3 border-t border-gray-800">
        <h2 className="font-semibold mb-2">
          Upload New Video
        </h2>

        <div className="flex flex-col gap-2 max-w-xl">
          <input
            type="text"
            placeholder="Video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-2 bg-black border border-gray-700 rounded"
          />

          <input
            type="text"
            placeholder="Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="px-3 py-2 bg-black border border-gray-700 rounded"
          />

          <input
            type="text"
            placeholder="Thumbnail URL"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            className="px-3 py-2 bg-black border border-gray-700 rounded"
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>

      {/* Channel Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {videos.map((video) => (
          <div key={video._id}>
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-44 object-cover rounded"
            />
            <h3 className="mt-2 text-sm font-semibold">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
