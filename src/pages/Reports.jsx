
import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import FinancialChart from "../components/FinancialChart.jsx";

const Reports = () => {
  return (
    <div className=" bg-[#7798c8]">
      <Header />
      <div className="flex pt-16">
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <h2 className="text-2xl text-white font-bold mb-4">Reports</h2>
          <FinancialChart />
        </main>
      </div>

      <div className="p-5 mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Reports;
