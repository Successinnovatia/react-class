import React, { useState } from "react";

const todoList = ["learn react", "learn js"];

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i)=> i !== index)
    setTodos(newTodos)
    
  }

  const clearTodos = () => {
    const newTodos = [];
    setTodos([newTodos]);
  }

  return (
    <div className="bg-blue-500 w-1/2 mx-auto p-6 rounded-md mt-10">
      <div className="flex gap-2 w-1/2 mx-auto">
        <input
          type="text"
          name="input"
          value={input}
          className="border-2 rounded-md bg-white"
          onChange={handleChange}
        />
        <button className="bg-white px-4 rounded-md" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul className="mt-6">
        {todos.map((todo, index) => {
          return (
            <li className="bg-gray-200 p-2 mb-2 rounded-md flex justify-between" key={index}>
              <span>{todo}</span>
              <button className="bg-red-500 rounded-md p-1 text-white" onClick={() => deleteTodo(index)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <button className="bg-green-500 p-2 rounded-md text-white" onClick={clearTodos}    >
        clear
      </button>
    </div>
  );
}
