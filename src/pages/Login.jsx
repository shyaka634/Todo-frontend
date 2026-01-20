
import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const login = async () => {
    if (!username || !password) {
      alert("Username and password required");
      return;
    }

    await api.post("/auth/login", { username, password });
    navigate("/todos");
  };

  return (
    <>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </>
  );
}
