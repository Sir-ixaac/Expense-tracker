import React from "react";
import { useExpensesStore } from "../hooks/useExpenses.jsx";
import { useIncomeStore } from "../hooks/useIncome.jsx";
import ExpenseCard from "./ExpenseCard.jsx";

const ExpenseList = ({ track = "expense" }) => {
  const expenses = useExpensesStore((s) => s.expenses);
  const income = useIncomeStore((s) => s.income);
  const records = track === "income" ? income : expenses;

  if (!records.length) {
    return (
      <div className="p-4 bg-white font-bold rounded shadow text-slate-500">
        No {track === "income" ? "income" : "expenses"} yet
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {records
        .slice()
        .reverse()
        .map((e) => (
          <ExpenseCard key={e.id} expense={e} />
        ))}
    </div>
  );
};

export default ExpenseList;
