import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const ProfileMenu = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Not logged in → only Sign In
  if (!isLoggedIn) {
    return (
      <button
        onClick={() => navigate("/login")}
        className="px-4 py-1.5 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
      >
        Sign In
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 relative">
      {/* CREATE BUTTON */}
      <button
        onClick={() => navigate("/channel")}
        className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-black hover:bg-gray-200"
        title="Create"
      >
        <span className="text-lg">＋</span>
        <span className="text-sm">Create</span>
      </button>

      {/* NOTIFICATION BUTTON */}
      <button
        className="p-2 rounded-full hover:bg-gray-200"
        title="Notifications"
        onClick={() => alert("Notifications feature coming soon")}
      >
        🔔
      </button>

      {/* PROFILE AVATAR */}
      <img
        src={user.avatar}
        alt="profile"
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full border border-gray-400 cursor-pointer"
      />

      {/* DROPDOWN */}
      {open && <ProfileDropdown onClose={() => setOpen(false)} />}
    </div>
  );
};

export default ProfileMenu;
