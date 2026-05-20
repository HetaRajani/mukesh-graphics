import axios from "axios";

const API = axios.create({
  baseURL: "https://printcraft-express.onrender.com/api",
});

export default API;