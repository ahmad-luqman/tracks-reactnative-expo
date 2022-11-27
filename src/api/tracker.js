import axios from "axios";

const api = axios.create({
  baseURL: "https://d7d9-101-50-117-20.eu.ngrok.io",
});

export default api;
