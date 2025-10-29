import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiList,
  FiBarChart2,
  FiUser,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import { useAuthStore } from "../hooks/useAuth.jsx";

const LinkItem = ({ to, icon, label, onClose }) => (
  <NavLink
    to={to}
    onClick={onClose}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-md transition ${
        isActive
          ? "bg-blue-100 text-blue-800 font-semibold"
          : "text-slate-700 hover:bg-slate-100 hover:font-semibold"
      }`
    }>
    {icon}
    <span>{label}</span>
  </NavLink>
);

const Sidebar = ({ onClose }) => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/login");
  };

  return (
    <aside
      className="w-64 bg-white border-r h-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button for Mobile */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-gray-600 md:hidden">
        <FiX />
      </button>

      {/* Sidebar Navigation */}
      <nav className="p-4 mt-10 md:mt-4 space-y-2">
        <LinkItem
          to="/"
          icon={<FiHome />}
          label="Dashboard"
          onClose={onClose}
        />
        <LinkItem
          to="/expenses"
          icon={<FiList />}
          label="Expenses"
          onClose={onClose}
        />
        <LinkItem
          to="/reports"
          icon={<FiBarChart2 />}
          label="Reports"
          onClose={onClose}
        />
        <LinkItem
          to="/profile"
          icon={<FiUser />}
          label="Profile"
          onClose={onClose}
        />

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 mt-4 text-red-600 rounded-md hover:bg-red-50">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
