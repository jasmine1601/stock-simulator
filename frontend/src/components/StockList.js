import React, { useEffect, useState } from "react";
import { getStocks } from "../services/api";

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getStocks().then((response) => setStocks(response.data));
  }, []);

  return (
    <div>
      <h2>📊 Stocks</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.symbol}</td>
              <td>{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
