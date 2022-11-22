import axios from "axios";

const api = axios.create({
  baseURL: "https://incloodle.herokuapp.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
