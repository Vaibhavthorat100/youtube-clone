import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    onClose();
  };

  return (
    <div className="absolute right-0 top-12 w-40 bg-white border border-gray-300 rounded shadow-lg z-50">
      <button
        onClick={() => {
          navigate("/channel");
          onClose();
        }}
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
      >
        My Channel
      </button>

      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
