import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo, setSelectedVideo } from "../features/video/videoSlice";
import { useEffect } from "react";
import Comments from "../components/video/Comments";

const Watch = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { videos, likes } = useSelector((state) => state.video);

  // current video
  const video = videos.find((v) => v.id === id);

  // set selected video (clean architecture)
  useEffect(() => {
    if (video) {
      dispatch(setSelectedVideo(video));
    }
  }, [video, dispatch]);

  if (!video) {
    return (
      <div className="flex-1 p-4 text-red-500">
        Video not found
      </div>
    );
  }

  return (
    <div className="flex-1 p-4">
      {/* Video Player */}
      <div className="w-full">
        <iframe
          className="w-full h-[420px] rounded-lg"
          src="https://www.youtube.com/embed/dGcsHMXbSOA"
          title={video.title}
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Info */}
      <h1 className="mt-4 text-xl font-bold">
        {video.title}
      </h1>

      <p className="text-gray-400">
        {video.channel}
      </p>

      <p className="text-gray-400 text-sm">
        {video.views} views
      </p>

      {/* Actions */}
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => dispatch(likeVideo(video.id))}
          className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
        >
          👍 Like {likes[video.id] || 0}
        </button>
      </div>

      {/* Comments */}
      <Comments />
    </div>
  );
};

export default Watch;
