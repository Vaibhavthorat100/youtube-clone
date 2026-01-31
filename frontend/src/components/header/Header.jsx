import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/ui/uiSlice";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

// YouTube official logo
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header
      className="
        sticky top-0 z-50
        h-14 px-4
        flex items-center justify-between
        bg-white
        border-b border-gray-300
      "
    >
      {/* LEFT: Menu + YouTube Logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-black text-xl p-2 rounded-full hover:bg-gray-200"
        >
          ☰
        </button>

        <div className="flex items-center gap-1 cursor-pointer select-none">
          <FaYoutube size={28} className="text-red-600" />
          <span className="text-black text-lg font-semibold">
            YouTube
          </span>
        </div>
      </div>

      {/* CENTER: Search Bar */}
      <SearchBar />

      {/* RIGHT: Create + Notification + Profile */}
      <ProfileMenu />
    </header>
  );
};

export default Header;
