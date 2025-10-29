
import React from "react";
import { formatCurrency, formatDate } from "../utils/helpers";
import { FiTrash2 } from "react-icons/fi";
import { useExpensesStore } from "../hooks/useExpenses.jsx";

const ExpenseCard = ({ expense }) => {
  const removeExpense = useExpensesStore((s) => s.removeExpense);
  return (
    <div className="flex items-center font-semibold justify-between p-3 bg-white text-black rounded shadow">
      <div>
        <div className="font-semibold">{expense.title}</div>
        <div className="text-sm text-slate-500">
          {expense.category} • {formatDate(expense.date)}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="font-semibold">{formatCurrency(expense.amount)}</div>
        <button
          onClick={() => removeExpense(expense.id)}
          className="p-2 rounded hover:bg-slate-100">
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
