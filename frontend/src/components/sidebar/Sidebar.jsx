import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../features/ui/uiSlice";
import SidebarItem from "./SidebarItem";

// React Icons (YouTube-like)
import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
  MdThumbUp,
  MdWhatshot,
  MdMusicNote,
  MdSportsEsports,
  MdNewspaper,
} from "react-icons/md";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Overlay (mobile) */}
      <div
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        onClick={() => dispatch(closeSidebar())}
      />

      {/* Sidebar */}
      <aside className="fixed md:static z-50 w-64 min-h-[calc(100vh-56px)] bg-white border-r border-gray-300 p-2 overflow-y-auto">
        {/* MAIN */}
        <SidebarItem icon={<MdHome size={22} />} label="Home" />
        <SidebarItem icon={<MdSubscriptions size={22} />} label="Subscriptions" />

        <hr className="my-3 border-gray-300" />

        {/* SUBSCRIPTIONS (DUMMY) */}
        <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">
          Subscriptions
        </p>
        <SidebarItem icon={<MdVideoLibrary size={20} />} label="Code With Bhai" />
        <SidebarItem icon={<MdVideoLibrary size={20} />} label="Frontend King" />
        <SidebarItem icon={<MdVideoLibrary size={20} />} label="JS Master" />

        <hr className="my-3 border-gray-300" />

        {/* EXPLORE */}
        <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">
          Explore
        </p>
        <SidebarItem icon={<MdWhatshot size={22} />} label="Trending" />
        <SidebarItem icon={<MdMusicNote size={22} />} label="Music" />
        <SidebarItem icon={<MdSportsEsports size={22} />} label="Gaming" />
        <SidebarItem icon={<MdNewspaper size={22} />} label="News" />

        <hr className="my-3 border-gray-300" />

        {/* LIBRARY */}
        <SidebarItem icon={<MdVideoLibrary size={22} />} label="Library" />
        <SidebarItem icon={<MdHistory size={22} />} label="History" />
        <SidebarItem icon={<MdWatchLater size={22} />} label="Watch Later" />
        <SidebarItem icon={<MdThumbUp size={22} />} label="Liked Videos" />
      </aside>
    </>
  );
};

export default Sidebar;
