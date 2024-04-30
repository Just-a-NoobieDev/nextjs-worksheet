"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import NavBar from "../components/NavBar";

interface Todo {
  id: number;
  text: string;
  status: "active" | "completed";
}

export default function Activity5() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Next.js", status: "active" },
    { id: 2, text: "Build an app", status: "active" },
    { id: 3, text: "Ship it!", status: "completed" },
  ]);
  const [text, setText] = useState("");

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "active" ? "completed" : "active",
            }
          : todo
      )
    );
  };

  return (
    <>
      <NavBar isActivity5 />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
        <div className="w-1/2 flex flex-col items-center justify-center bg-slate-50 p-10 rounded-lg gap-4">
          <h1 className="text-2xl font-bold">Todos</h1>
          <div className="w-full">
            <div className="flex items-center justify-between w-full gap-4 mb-8">
              <input
                id="todo-input"
                type="text"
                placeholder="What needs to be done?"
                className="w-full p-4 border border-gray-300 rounded-lg"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                id="add-todo"
                className="bg-blue-500 text-white p-4"
                onClick={() => {
                  addTodo({
                    id: todos.length + 1,
                    text,
                    status: "active",
                  });
                  setText("");
                }}
              >
                <Plus />
              </button>
            </div>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between w-full gap-4 py-4 todo-list"
              >
                <input
                  id="toggle-todo"
                  type="checkbox"
                  checked={todo.status === "completed"}
                  onChange={() => toggleTodo(todo.id)}
                  className={`w-6 h-6 border border-gray-300 rounded-lg cursor-pointer ${
                    todo.status === "completed" ? "opacity-50" : ""
                  }`}
                />
                <span
                  className={`text-xl ${
                    todo.status === "completed" ? "line-through opacity-50" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  id="remove-todo"
                  className="bg-red-500 text-white p-4"
                  onClick={() => removeTodo(todo.id)}
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
