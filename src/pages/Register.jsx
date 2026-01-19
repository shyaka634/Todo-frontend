import React, { useState } from "react";
import api from "../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await api.post("/auth/register", { username, password });
    window.location = "/";
  };

  return (
    <>
      <h2>Register</h2>
      <input onChange={e => setUsername(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </>
  );
}
