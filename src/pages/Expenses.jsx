import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import ExpenseForm from "../components/ExpenseForm.jsx";
import ExpenseList from "../components/ExpenseList.jsx";
import Footer from "../components/Footer.jsx";

const Expenses = () => {
  return (
    <div className="min-h-screen bg-blue-700">
      <Header />
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Expenses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <ExpenseForm />
            </div>
            <div className="md:col-span-2">
              <ExpenseList />
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

export default Expenses;
