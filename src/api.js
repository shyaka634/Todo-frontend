import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-app-4-ooas.onrender.com/api",
  withCredentials: true
});

export default api;
