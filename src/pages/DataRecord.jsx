import React  from "react";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import ExpenseForm from "../components/ExpenseForm.jsx";
import ExpenseList from "../components/ExpenseList.jsx";
import TrackSelector from "../components/TrackSelector.jsx";
import Footer from "../components/Footer.jsx";
const DataRecord = () => {
  const [track, setTrack] = useState("expense");
  return (
    <div className=" bg-[#7798c8]">
      <Header />
      <div className="flex pt-16">
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">
              {track === "income" ? "Add Income Data" : "Add Expense Data"}
            </h2>
            <TrackSelector value={track} onChange={setTrack} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <ExpenseForm track={track} />
            </div>
            <div className="md:col-span-2">
              <ExpenseList track={track} />
            </div>
          </div>
        </main>
      </div>
      <div className="p-5 mt-5">
        <Footer />
      </div>
    </div>
  );
};
export default DataRecord;
