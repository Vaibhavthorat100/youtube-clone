import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MdNotificationsNone,
  MdVideoCall,
} from "react-icons/md";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector(
    (state) => state.auth
  );

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-full text-gray-700 hover:bg-gray-200"
          title="Create"
        >
          <MdVideoCall size={24} />
        </button>

        <button
          className="p-2 rounded-full text-gray-700 hover:bg-gray-200"
          title="Notifications"
        >
          <MdNotificationsNone size={24} />
        </button>

        <button
          onClick={() => navigate("/login")}
          className="px-4 py-1.5 border border-blue-500 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <button
        className="p-2 rounded-full text-gray-700 hover:bg-gray-200"
        title="Create"
      >
        <MdVideoCall size={24} />
      </button>

      <button
        className="p-2 rounded-full text-gray-700 hover:bg-gray-200"
        title="Notifications"
      >
        <MdNotificationsNone size={24} />
      </button>

      <img
        src={user?.avatar}
        alt="profile"
        className="w-8 h-8 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default ProfileMenu;
