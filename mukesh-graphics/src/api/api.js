import axios from "axios";

const API = axios.create({
  baseURL: "https://printcraft-express.onrender.com/api",
});

console.log(
  "API BASE URL:",
  "https://printcraft-express.onrender.com/api"
);

export default API;