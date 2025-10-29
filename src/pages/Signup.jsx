import React, { useState } from "react";
import { useAuthStore } from "../hooks/useAuth.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

const Signup = () => {
  const signup = useAuthStore((s) => s.signup);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [focusField, setFocusField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please complete all fields");
      return;
    }
    signup(name, email, password);
    toast.success("Account created");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex font-black items-center justify-center bg-blue-700 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow p-6">
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
          <p className="text-center text-sm text-gray-400">
            Create a new account below
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 mb-3 mt-4">
          <div>
            <label className="block text-sm font-black">Full name</label>
            <div className="flex items-center gap-2  rounded-lg w-full outline-2 outline-cyan-500 text-black font-semibold px-3 py-4 mt-2">
              {!(focusField === "name" || name) && (
                <FiUser className="text-gray-500" />
              )}
              <input
                placeholder="Kinplus"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusField("name")}
                onBlur={() => setFocusField(null)}
                className=" outline-0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-black">Email</label>
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
            <label className="block text-sm font-black">Password</label>
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
          className="w-full bg-blue-800 text-white py-3 rounded-xl mt-4 hover:bg-blue-600 transition">
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-700 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
