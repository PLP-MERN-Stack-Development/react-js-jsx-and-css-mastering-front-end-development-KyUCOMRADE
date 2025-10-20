import React from "react";

export default function Button({ children, onClick, variant = "primary", className }) {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition w-full sm:w-auto";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    secondary: "bg-gray-200 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className || ""}`}>
      {children}
    </button>
  );
}
