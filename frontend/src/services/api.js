import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getStocks = () => axios.get(`${API_BASE_URL}/stocks`);
export const getPortfolio = (user) =>
  axios.get(`${API_BASE_URL}/portfolio/${user}`);
