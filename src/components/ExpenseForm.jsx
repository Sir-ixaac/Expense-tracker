
import React, { useState } from "react";
import { useExpensesStore } from "../hooks/useExpenses.jsx";
import toast from "react-hot-toast";

const ExpenseForm = ({ onAdded }) => {
  const addExpense = useExpensesStore((s) => s.addExpense);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      toast.error("Please provide title and amount");
      return;
    }
    const item = addExpense({
      title,
      amount: Number(amount),
      category: category || "General",
      date: new Date().toISOString(),
    });
    setTitle("");
    setAmount("");
    setCategory("");
    toast.success("Expense added");
    if (onAdded) onAdded(item);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 p-4 bg-white rounded shadow">
      <div>
        <label className="block text-sm font-bold text-blue-800">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full px-3 py-3 text-blue-800 outline-0 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-blue-800">Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="mt-1 w-full px-3 py-3 text-blue-800 outline-0 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-blue-800">
          Category
        </label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full px-3 py-3 text-blue-800 outline-0 border rounded"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="radio"
          className="bg-blue-600 font-bold text-white rounded">
          income
        </button>

        <button
          type="radio"
          className="bg-blue-600 font-bold text-white rounded">
          Expense
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 font-bold text-white rounded">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
