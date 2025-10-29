import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-7 items-center justify-center">
      <div>
        <footer className=" text-sm text-white font-black">
          © {new Date().getFullYear()} Kinplus Expense Tracker
        </footer>
      </div>

      <div className=" font-bold text-white text-sm">
        <span className="text-cyan-400 font-semibold"> ixaac.dev</span> — All
        Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
