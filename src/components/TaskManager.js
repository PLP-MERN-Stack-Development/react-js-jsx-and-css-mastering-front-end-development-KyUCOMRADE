import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
export default function TaskManager() {
    const { theme } = useTheme();
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const [filter, setFilter] = useState("all");
    // ------------------ Task Management ------------------
    const addTask = () => {
        if (!task.trim())
            return;
        setTasks([
            { id: Date.now(), text: task, completed: false, completionDate: null },
            ...tasks,
        ]);
        setTask("");
    };
    const toggleComplete = (id) => {
        setTasks(tasks.map((t) => t.id === id
            ? {
                ...t,
                completed: !t.completed,
                completionDate: !t.completed ? new Date().toLocaleString() : null,
            }
            : t));
    };
    const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
    const filteredTasks = tasks.filter((t) => {
        if (filter === "active")
            return !t.completed;
        if (filter === "completed")
            return t.completed;
        return true;
    });
    const cardTheme = {
        light: "bg-gray-100 dark:bg-gray-50",
        dark: "bg-gray-700",
        teal: "bg-teal-200",
        pink: "bg-pink-200",
        amber: "bg-amber-200",
    };
    // ------------------ Sample Posts ------------------
    const posts = [
        { id: 1, title: "Learn React", body: "Understand components, state, and props." },
        { id: 2, title: "Tailwind CSS", body: "Style your app easily with utility classes." },
        { id: 3, title: "Build a Task App", body: "Practice React hooks and localStorage." },
        { id: 4, title: "API Integration", body: "Fetch data and display it dynamically." },
        { id: 5, title: "Deploy Your App", body: "Use Vercel or Netlify to go live." },
    ];
    return (_jsxs("div", { className: `w-full flex flex-col items-center space-y-6 p-6 rounded-md border border-gray-300 ${cardTheme[theme]}`, children: [_jsxs("div", { className: "flex flex-col sm:flex-row w-full items-center gap-2", children: [_jsx("input", { type: "text", placeholder: "Enter a task...", value: task, onChange: (e) => setTask(e.target.value), className: "flex-grow p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 outline-none" }), _jsx(Button, { onClick: addTask, children: "Add" })] }), _jsx("div", { className: "flex justify-center gap-3 flex-wrap", children: ["all", "active", "completed"].map((f) => (_jsx("button", { onClick: () => setFilter(f), className: `px-3 py-1 rounded-md capitalize transition ${filter === f
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`, children: f }, f))) }), _jsx("ul", { className: "w-full space-y-2", children: filteredTasks.length > 0 ? (filteredTasks.map((t) => (_jsxs("li", { className: `p-3 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center transition-all duration-300 ease-in-out cursor-pointer ${t.completed
                        ? "bg-green-600 text-white line-through scale-[0.98]"
                        : "hover:bg-gray-300 dark:hover:bg-gray-600"}`, children: [_jsxs("div", { onClick: () => toggleComplete(t.id), className: "flex-grow", children: [t.text, t.completed && (_jsxs("div", { className: "text-sm text-gray-200 dark:text-gray-300 italic mt-1 sm:mt-0", children: ["\u2705 Completed on ", t.completionDate] }))] }), _jsx("button", { onClick: () => deleteTask(t.id), className: "ml-0 sm:ml-3 mt-2 sm:mt-0 text-red-500 hover:text-red-700", children: "\u2716" })] }, t.id)))) : (_jsx("p", { className: "text-center text-gray-500 dark:text-gray-400 italic w-full", children: "No tasks yet" })) }), _jsxs("div", { className: "w-full mt-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-2", children: "Sample Posts" }), _jsx("ul", { className: "space-y-2", children: posts.map((p) => (_jsxs("li", { className: "p-2 rounded-md border border-gray-300 dark:border-gray-600", children: [_jsx("strong", { children: p.title }), _jsx("p", { children: p.body })] }, p.id))) })] })] }));
}
