import React from "react";

const TrackSelector = ({ value, onChange }) => {
  return (
    <div className="flex mb-4">
      <label className="font-semibold text-white">Select Track:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white px-3 py-2 rounded outline-none text-blue-700 font-semibold">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default TrackSelector;
