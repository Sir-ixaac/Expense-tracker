
import React from "react";
import { useExpensesStore } from "../hooks/useExpenses.jsx";
import { formatCurrency } from "../utils/helpers.js";

const StatsCards = () => {
  const expenses = useExpensesStore((s) => s.expenses);
  const total = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
  const count = expenses.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 bg-white rounded shadow">
        <div className="text-sm">Total Expenses</div>
        <div className="text-lg text-green-500 font-bold">
          {formatCurrency(total)}
        </div>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <div className="text-sm">Records</div>
        <div className="text-lg text-blue-800 font-bold">{count}</div>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <div className="text-sm ">Average</div>
        <div className="text-lg text-yellow-500 font-bold">
          {formatCurrency(count ? total / count : 0)}
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
