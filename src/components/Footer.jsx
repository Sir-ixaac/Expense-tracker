import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-7 items-center justify-center">
      <div>
        <footer className=" text-sm text-center text-white font-black">
          © {new Date().getFullYear()} Kinplus Expense Tracker
        </footer>
      </div>
    </div>
  );
};

export default Footer;
