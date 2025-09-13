import React from "react";

const CustomBtn = ({ children, onClick, variant = "primary", className = "" }) => {
  // Define styles for button variants
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition duration-200 ease-in-out";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-black hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
