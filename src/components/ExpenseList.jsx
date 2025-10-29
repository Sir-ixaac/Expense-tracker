
import React from "react";
import { useExpensesStore } from "../hooks/useExpenses.jsx";
import ExpenseCard from "./ExpenseCard.jsx";

const ExpenseList = () => {
  const expenses = useExpensesStore((s) => s.expenses);

  if (!expenses.length) {
    return (
      <div className="p-4 bg-white rounded shadow text-slate-500">
        No expenses yet
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {expenses
        .slice()
        .reverse()
        .map((e) => (
          <ExpenseCard key={e.id} expense={e} />
        ))}
    </div>
  );
};

export default ExpenseList;
