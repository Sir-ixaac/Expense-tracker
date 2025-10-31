import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import StatsCards from "../components/StatsCards.jsx";
import FinancialChart from "../components/FinancialChart.jsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-700">
      <Header />
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
          <div className="space-y-4">
            <StatsCards />
            <FinancialChart />
          </div>
          <div className="p-5 mt-5">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
