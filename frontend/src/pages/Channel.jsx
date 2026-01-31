import { useSelector, useDispatch } from "react-redux";
import { addVideo, deleteVideo } from "../features/video/videoSlice";
import { useState } from "react";

const Channel = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { videos } = useSelector((state) => state.video);

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  // add new video (frontend only)
  const handleAddVideo = () => {
    if (!title || !thumbnail) return;

    const newVideo = {
      id: Date.now().toString(),
      title,
      channel: user.name,
      views: "0",
      thumbnail,
    };

    dispatch(addVideo(newVideo));

    setTitle("");
    setThumbnail("");
  };

  return (
    <div className="flex-1 bg-black">
      {/* Channel Banner */}
      <div className="h-40 bg-gradient-to-r from-gray-800 to-gray-900"></div>

      {/* Channel Info */}
      <div className="p-4 flex items-center gap-4">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-20 h-20 rounded-full"
        />

        <div>
          <h1 className="text-2xl font-bold">
            {user.name}
          </h1>
          <p className="text-gray-400">
            {videos.length} videos
          </p>
        </div>
      </div>

      {/* Add Video Section */}
      <div className="px-4 py-3 border-t border-gray-800">
        <h2 className="font-semibold mb-2">
          Upload New Video
        </h2>

        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Video title"
            className="flex-1 px-3 py-2 bg-black border border-gray-700 rounded outline-none"
          />

          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="Thumbnail URL"
            className="flex-1 px-3 py-2 bg-black border border-gray-700 rounded outline-none"
          />

          <button
            onClick={handleAddVideo}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Channel Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-44 object-cover rounded-lg"
            />

            <h3 className="mt-2 font-semibold text-sm">
              {video.title}
            </h3>

            {/* Delete button */}
            <button
              onClick={() => dispatch(deleteVideo(video.id))}
              className="absolute top-2 right-2 bg-black/70 text-xs px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
