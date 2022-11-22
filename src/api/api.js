import axios from "axios";

const api = axios.create({
  // baseURL: "https://incloodle.herokuapp.com/v1",
  baseURL: "http://127.0.0.1:64578/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
