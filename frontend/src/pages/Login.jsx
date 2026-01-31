import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import AuthInput from "../features/auth/AuthInput"; // ✅ FIXED PATH

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return;

    dispatch(
      login({
        id: "user01",
        name: "Vaibhav",
        email,
        avatar: "https://i.pravatar.cc/150?img=3",
      })
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg border border-gray-800">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="text-red-600 text-3xl font-bold">
            ▶ YouTube
          </span>
        </div>

        <h1 className="text-xl font-semibold mb-1">
          Sign In
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          to continue to YouTube
        </p>

        <AuthInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full mt-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Sign In
        </button>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Frontend-only authentication demo
        </p>
      </div>
    </div>
  );
};

export default Login;
