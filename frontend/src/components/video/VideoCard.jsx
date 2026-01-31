import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch/${video.id}`)}
      className="cursor-pointer"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-44 object-cover rounded-lg"
      />

      <div className="mt-2">
        <h3 className="font-semibold text-sm text-black line-clamp-2">
          {video.title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          {video.channel}
        </p>

        <p className="text-gray-500 text-xs">
          {video.views} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
