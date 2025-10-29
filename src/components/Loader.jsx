
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-8 h-8 rounded-full animate-spin border-4 border-t-transparent border-slate-700"></div>
    </div>
  );
};

export default Loader;
