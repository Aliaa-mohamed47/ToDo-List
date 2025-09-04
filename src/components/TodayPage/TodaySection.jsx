import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaClock, FaTrash } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

const TaskInput = ({ section, input, setInput, addTask }) => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleChange = (field, value) => {
    setInput({
      ...input,
      [section]: {
        ...input[section],
        [field]: value,
      },
    });
  };

  const current = input[section];
  const isReady = current.text && current.date && current.time;

  return (
    <div className="relative  mb-3 flex items-center">
      <button
        type="button"
        onClick={() => addTask(section)}
        disabled={!isReady}
        className={`absolute left-3 top-1/2 -translate-y-1/2 text-2xl transition
          ${isReady ? "text-blue-500 hover:scale-110" : "text-gray-400 cursor-not-allowed"}`}
      >
        <AiOutlinePlusCircle />
      </button>

      <input
        type="text"
        className="w-full border rounded px-10 py-2 pr-24 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
        placeholder="Add new task"
        value={current.text}
        onChange={(e) => handleChange("text", e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && isReady && addTask(section)}
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-3 items-center">
        <div className="relative">
          <FaCalendarAlt
            className="text-gray-400 hover:text-blue-500 cursor-pointer"
            onClick={() => setShowDate(!showDate)}
          />
          {showDate && (
            <input
              type="date"
              className="absolute top-8 right-0 border rounded px-2 py-1 text-sm bg-white shadow focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
              value={current.date}
              onChange={(e) => {
                handleChange("date", e.target.value);
                setShowDate(false);
              }}
            />
          )}
        </div>

        <div className="relative">
          <FaClock
            className="text-gray-400 hover:text-blue-500 cursor-pointer"
            onClick={() => setShowTime(!showTime)}
          />
          {showTime && (
            <input
              type="time"
              className="absolute top-8 right-0 border rounded px-2 py-1 text-sm bg-white shadow focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
              value={current.time}
              onChange={(e) => {
                handleChange("time", e.target.value);
                setShowTime(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const TodayPage = () => {
  const [tasks, setTasks] = useState({ today: [] });
  const [input, setInput] = useState({ today: { text: "", date: "", time: "" } });
  const [tasksKey, setTasksKey] = useState("tasks_guest");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const key = currentUser ? `tasks_${currentUser.email}` : "tasks_guest";
    setTasksKey(key);
  }, []);

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem(tasksKey);
      if (savedTasks) setTasks(JSON.parse(savedTasks));
    } catch (e) {
      console.error("Failed to load tasks from localStorage", e);
    }
  }, [tasksKey]);

  useEffect(() => {
    try {
      localStorage.setItem(tasksKey, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks to localStorage", e);
    }
  }, [tasks, tasksKey]);

  const addTask = (section) => {
    const { text, date, time } = input[section];
    if (!text.trim() || !date || !time) return;

    setTasks({
      ...tasks,
      [section]: [...tasks[section], { text, date, time, completed: false }],
    });

    setInput({
      ...input,
      [section]: { text: "", date: "", time: "" },
    });
  };

  const toggleTask = (section, index) => {
    const updated = [...tasks[section]];
    updated[index].completed = !updated[index].completed;
    setTasks({ ...tasks, [section]: updated });
  };

  const deleteTask = (section, index) => {
    const updated = [...tasks[section]];
    updated.splice(index, 1);
    setTasks({ ...tasks, [section]: updated });
  };

  const totalTasks = tasks.today.filter((t) => !t.completed).length;

  return (
    <div className="p-8 bg-white w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-gray-secondary">
        Today
        <span className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
          {totalTasks}
        </span>
      </h1>

      <div className="border rounded-xl p-6 bg-white shadow w-full pb-30">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Today</h2>
        <TaskInput
          section="today"
          input={input}
          setInput={setInput}
          addTask={addTask}
        />
        <ul className="mt-4 space-y-3">
          {tasks.today.map((task, i) => (
            <li
              key={i}
              className="group flex items-center justify-between py-1.5 border-b last:border-0"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask("today", i)}
                  className="form-checkbox text-blue-500 rounded focus:ring-blue-500 h-4 w-4"
                />
                <span
                  className={
                    task.completed
                      ? "line-through text-gray-500 text-base"
                      : "text-gray-800 text-base"
                  }
                >
                  {task.text}
                </span>
              </div>
              <button
                className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition"
                onClick={() => deleteTask("today", i)}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodayPage;
