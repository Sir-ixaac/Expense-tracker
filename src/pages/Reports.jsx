
import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import ExpenseChart from "../components/ExpenseChart.jsx";
import Footer from "../components/Footer.jsx";

const Reports = () => {
  return (
    <div className="min-h-screen bg-blue-700">
      <Header />
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <h2 className="text-2xl text-white font-bold mb-4">Reports</h2>
          <ExpenseChart />
        </main>
      </div>

      <div className="p-5 mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Reports;
