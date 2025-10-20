import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ title }) {
  const { theme, setTheme } = useTheme();
  const themeOptions = ["light", "dark", "teal", "pink", "amber"];

  return (
    <header className="w-full max-w-3xl flex justify-between items-center mb-6 p-4 rounded-md border border-gray-300 dark:border-gray-700">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600"
      >
        {themeOptions.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
    </header>
  );
}
