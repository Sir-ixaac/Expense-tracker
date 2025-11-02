import React from "react";
import { useIncomeStore } from "../hooks/useIncome";
import { useExpensesStore } from "../hooks/useExpenses";
import { CURRENCY } from "../utils/constants";

const NetResult = () => {
  const income = useIncomeStore((s) => s.income);
  const expenses = useExpensesStore((s) => s.expenses);

  const totalIncome = income.reduce((sum, i) => sum + Number(i.amount || 0), 0);
  const totalExpense = expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );
  const balance = totalIncome - totalExpense;

  const balanceColor =
    balance > 0
      ? "text-green-700"
      : balance < 0
      ? "text-red-700"
      : "text-gray-700";

  return (
    <div
      className={`mt-6 w-full p-5 rounded-2xl text-center shadow-sm border 
        ${
          balance >= 0
            ? "border-green-200 bg-green-50"
            : "border-red-200 bg-red-50"
        }`}>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Net Result
      </h2>

      <div className="flex justify-center gap-6 text-lg">
        <p className="text-green-700">
          Income:
          <span className="font-bold">
            {CURRENCY}
            {totalIncome.toFixed(2)}
          </span>
        </p>
        <p className="text-red-700">
          Expense:
          <span className="font-bold">
            {CURRENCY}
            {totalExpense.toFixed(2)}
          </span>
        </p>
      </div>

      <p className={`text-2xl font-bold mt-3 ${balanceColor}`}>
        Balance: {CURRENCY}
        {balance.toFixed(2)}
      </p>
    </div>
  );
};

export default NetResult;
