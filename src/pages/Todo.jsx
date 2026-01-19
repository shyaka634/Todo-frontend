
import React, { useEffect, useState } from "react";
import api from "../api";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const res = await api.get("/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async () => {
    await api.post("/todos", { text });
    setText("");
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    loadTodos();
  };

  return (
    <>
      <h2>Todo App</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
