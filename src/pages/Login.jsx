
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuth.jsx";
import toast from "react-hot-toast";
import { FiLock, FiMail } from "react-icons/fi";

const Login = () => {
  const login = useAuthStore((s) => s.login);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [focusField, setFocusField] = useState(null);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(email, password);
    if (res.ok) {
      toast.success("Logged in");
      navigate("/");
    } else {
      toast.error(res.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex font-black items-center justify-center bg-blue-700 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <div flex="center" className="flex justify-center mb-2">
          <img
            src="https://res.cloudinary.com/dl4a6kmzr/image/upload/v1752658768/kinplus-id-photos/ncao86zmbafcgvu1wmkt.jpg"
            className="w-8 h-8 rounded-sm object-cover"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl md:text-3xl text-blue-800 font-bold text-center mb-1">
            Kinplus Technologies
          </h1>
          <p className="text-center text-sm text-gray-600">
            Welcome back! Please login to continue.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="mb-3 mt-4">
            <label className="block text-sm">Email</label>
            <div className="flex items-center gap-2 rounded-lg w-full outline-2 outline-cyan-500 text-black font-semibold px-3 py-4 mt-2">
              {!(focusField === "email" || email) && (
                <FiMail className="text-gray-500" />
              )}
              <input
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusField("email")}
                onBlur={() => setFocusField(null)}
                className=" outline-0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <div className="flex items-center gap-2 rounded-lg w-full outline-2 outline-cyan-500 text-black font-semibold px-3 py-4 mt-2">
              {!(focusField === "password" || password) && (
                <FiLock className="text-gray-500" />
              )}
              <input
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusField("password")}
                onBlur={() => setFocusField(null)}
                type="password"
                className=" outline-0"
              />
            </div>
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-4">
          Login{" "}
        </button>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-800 font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
