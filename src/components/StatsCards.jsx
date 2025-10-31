import React from "react";
import { useExpensesStore } from "../hooks/useExpenses.jsx";
import { useIncomeStore } from "../hooks/useIncome.jsx";
import { formatCurrency } from "../utils/helpers.js";

const StatsCards = () => {
  const income = useIncomeStore((s) => s.income);
  const expenses = useExpensesStore((s) => s.expenses);

  const totalIncome = income.reduce((sum, i) => sum + Number(i.amount || 0), 0);
  const totalExpense = expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );

  const incomeCount = income.length;
  const expenseCount = expenses.length;

  const avgIncome = incomeCount ? totalIncome / incomeCount : 0;
  const avgExpense = expenseCount ? totalExpense / expenseCount : 0;

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Total income */}
      <div className="bg-green-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold text-green-700 mb-4">Income</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">Total Income</p>
            <p className="text-2xl font-bold text-green-600">
              {formatCurrency(totalIncome)}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">Income Records</p>
            <p className="text-2xl font-bold text-blue-600">{incomeCount}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">Average Income</p>
            <p className="text-2xl font-bold text-yellow-600">
              {formatCurrency(avgIncome)}
            </p>
          </div>
        </div>
      </div>

      {/* Expense Summary */}
      <div className="bg-red-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold text-red-700 mb-4">Expense</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">Total Expense</p>
            <p className="text-2xl font-bold text-red-600">
              {formatCurrency(totalExpense)}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">Expense Records</p>
            <p className="text-2xl font-bold text-blue-600">{expenseCount}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500">Average Expense</p>
            <p className="text-2xl font-bold text-yellow-600">
              {formatCurrency(avgExpense)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
