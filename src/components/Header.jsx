import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuth.jsx";
import { APP_NAME } from "../utils/constants";
import { FiMenu } from "react-icons/fi";

// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const logout = useAuthStore((s) => s.logout);
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow relative">
        {/* Menu Icon for Mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-lg  text-blue-800 absolute right-4">
          <FiMenu />
        </button>

        {/* Company Name */}
        <div className="flex items-center justify-between w-full">
          <div className="hidden md:block">
            <Link to="/" className="text-lg font-bold text-blue-800">
              {APP_NAME}
            </Link>
          </div>
        
        {/* Hello User (mobile + desktop) */}
        {user && (
          <span className="text-lg font-bold text-blue-800 absolute left-4 md:static md:px-7">
            Hello, {user.name}
          </span>
        )}
        </div>

        {/* Logout Button (Desktop Only) */}
        <button
          onClick={handleLogout}
          className="hidden md:flex items-center gap-2 px-3 py-1 rounded bg-rose-500 text-white hover:opacity-90">
          Logout
        </button>
      </header>

      {/* Sidebar + Overlay for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={closeSidebar}>
              </div>

            {/* Sidebar Slide-In */}
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative z-50">
              <Sidebar isSidebarOpen onClose={closeSidebar} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
