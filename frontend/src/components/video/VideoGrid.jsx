import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const { videos, search } = useSelector((state) => state.video);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredVideos.length === 0) {
    return (
      <div className="p-6 text-gray-500">
        No videos found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-white">
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
