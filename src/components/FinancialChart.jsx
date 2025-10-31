import React from "react";
import { useExpensesStore } from "../hooks/useExpenses.jsx";
import { useIncomeStore } from "../hooks/useIncome.jsx";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#22C55E", "#EF4444"];

const FinancialChart = () => {
  const expenses = useExpensesStore((s) => s.expenses);
  const income = useIncomeStore((s) => s.income);

  const totalExpense = expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );
  const totalIncome = income.reduce((sum, e) => sum + Number(e.amount || 0), 0);

  const data = [
    { name: "Income", value: totalIncome, color: COLORS[0] },
    { name: "Expense", value: totalExpense, color: COLORS[1] },
  ].filter((d) => d.value > 0);

  if (!data.length)
    return <div className="p-4 bg-white rounded shadow">No chart data</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold mb-10">Income vs Expense</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialChart;
