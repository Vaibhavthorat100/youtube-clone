import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/video/videoSlice";
import VideoGrid from "../components/video/VideoGrid";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading videos...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <VideoGrid />
      </div>
    </div>
  );
};

export default Home;
