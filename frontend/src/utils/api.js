import axios from "axios";

// Base Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (token attach karega)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (future use: global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // yahan global error handle kar sakta hai
    return Promise.reject(error);
  }
);

export default api;
