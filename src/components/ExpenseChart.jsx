
import React from "react";
import { useExpensesStore } from "../hooks/useExpenses.jsx";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#3B82F6", "#14B8A6", "#F97316"];

const ExpenseChart = () => {
  const expenses = useExpensesStore((s) => s.expenses);

  const byCat = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount || 0);
    return acc;
  }, {});

  const data = Object.keys(byCat).map((k, i) => ({ name: k, value: byCat[k], color: COLORS[i % COLORS.length] }));

  if (!data.length) return <div className="p-4 bg-white rounded shadow">No chart data</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold mb-10">Spending by Category</h3>
      <div style={{ width: "100%", height: 430 }}>
        <ResponsiveContainer>
          <PieChart margin={{ top: 10, bottom: 10 }}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={70}
              fill="#8884d8"
              label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: "30px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;
