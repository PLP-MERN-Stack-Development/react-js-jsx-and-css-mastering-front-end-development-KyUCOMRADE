import React from "react";
import TaskManager from "./components/TaskManager";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center p-4 transition-all">
        <Navbar title="Task App" />
        <main className="w-full max-w-3xl flex flex-col items-center">
          <TaskManager />
        </main>
        <footer className="text-center text-sm py-4 border-t border-gray-300 dark:border-gray-700 mt-6 w-full max-w-3xl">
          © 2025 Task App. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}
