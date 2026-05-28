import axios from "axios";

const API = axios.create({
  baseURL: "https://mukesh-graphics-xsb6.onrender.com/api",
});

export default API;