import axios from "axios";

export const BASE_URL = "https://incloodle.fly.dev/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
