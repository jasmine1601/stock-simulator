import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getStocks = () => axios.get(`${API_BASE_URL}/stocks`);

export const getPortfolio = (user) =>
  axios.get(`${API_BASE_URL}/portfolio/${user}`);

export const updateStockPrice = (symbol, price) =>
  axios.put(`${API_BASE_URL}/stocks/${symbol}/price`, null, {
    params: { price },
  });

export const buyStock = (userName, symbol, quantity) =>
  axios.post(`${API_BASE_URL}/portfolio/buy`, null, {
    params: { userName, symbol, quantity },
  });

export const sellStock = (userName, symbol, quantity) =>
  axios.post(`${API_BASE_URL}/portfolio/sell`, null, {
    params: { userName, symbol, quantity },
  });
