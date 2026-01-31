import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import AuthInput from "../features/auth/AuthInput.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, loading, error } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return;

    dispatch(loginUser({ email, password }));
  };

  // login success hone ke baad redirect
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg border border-gray-800">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="text-red-600 text-3xl font-bold">
            ▶ YouTube
          </span>
        </div>

        <h1 className="text-xl font-semibold mb-1 text-white">
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

        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Backend connected authentication
        </p>
      </div>
    </div>
  );
};

export default Login;
