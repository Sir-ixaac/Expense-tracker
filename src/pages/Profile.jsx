import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useAuthStore } from "../hooks/useAuth.jsx";
import Footer from "../components/Footer.jsx"

const Profile = () => {
  const user = useAuthStore((s) => s.user);

  return (
    <div className=" bg-[#7798c8]">
      <Header />
      <div className="flex pt-16">
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Profile</h2>
          <div className="p-4 bg-white rounded shadow max-w-md">
            <div className="mb-2">
              <strong>Name:</strong> {user?.name}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user?.email}
            </div>
          </div>
        </main>
      </div>

      <div className="p-5">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
