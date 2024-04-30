"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import NavBar from "../components/NavBar";
import { createClient } from "@supabase/supabase-js";

interface Todo {
  text: string;
  status: "active" | "completed";
}

export default function Activity5() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );
  const [todos, setTodos] = useState<any>([]);
  const [text, setText] = useState("");

  const addTodo = async (todo: Todo) => {
    const { data, error } = await supabase
      .from("todo")
      .insert([{ text: todo.text, status: todo.status }])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    setTodos([...todos, data[0]]);
  };

  const removeTodo = async (id: string) => {
    const { error } = await supabase.from("todo").delete().eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find((todo: any) => todo.id === id);

    if (!todo) {
      return;
    }

    const { data, error } = await supabase
      .from("todo")
      .update({ status: todo.status === "active" ? "completed" : "active" })
      .eq("id", id)
      .select();

    if (error) {
      console.error(error);
      return;
    }

    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, status: data[0].status } : todo
      )
    );
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase.from("todo").select();

      if (error) {
        console.error(error);
        return;
      }

      setTodos(data);
    };

    fetchTodos();
  }, [supabase]);

  return (
    <>
      <NavBar isActivity8 />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
        <div className="w-1/2 flex flex-col items-center justify-center bg-slate-50 p-10 rounded-lg gap-4">
          <h1 className="text-2xl font-bold">Todos with Supabase</h1>
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
                    text,
                    status: "active",
                  });
                  setText("");
                }}
              >
                <Plus />
              </button>
            </div>
            {todos.map((todo: any) => (
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
