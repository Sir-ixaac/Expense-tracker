import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import StatsCards from "../components/StatsCards.jsx";
import FinancialChart from "../components/FinancialChart.jsx";
import NetResult from "../components/NetResult.jsx";

const Dashboard = () => {
  return (
    <div className="bg-[#7798c8]">
      <Header />
      <div className="flex pt-16">
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
          <div className="space-y-4">
            <NetResult />
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
