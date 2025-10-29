
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
      className="space-y-3 p-4 bg-[#54abaa] rounded shadow">
      <div>
        <label className="block text-sm font-semibold text-white">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full px-3 py-2 text-white outline-0 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white">Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="mt-1 w-full px-3 py-2 text-white outline-0 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white">
          Category
        </label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full px-3 py-2 text-white outline-0 border rounded"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-500 text-white rounded">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
