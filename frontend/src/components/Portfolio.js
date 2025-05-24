import React, { useState } from "react";
import { getPortfolio, buyStock, sellStock } from "../services/api";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  const [user, setUser] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);

  const fetchPortfolio = () => {
    if (!user.trim()) return;

    getPortfolio(user).then((response) => {
      setPortfolio(response.data);
      const data = {
        labels: response.data.map((item) => item.stockSymbol),
        datasets: [
          {
            data: response.data.map((item) => item.totalInvestment),
            backgroundColor: [
              "#0074D9",
              "#FF4136",
              "#2ECC40",
              "#FF851B",
              "#B10DC9",
            ],
          },
        ],
      };
      setChartData(data);
    });
  };

  const handleBuy = () => {
    buyStock(user, symbol, quantity).then(() => fetchPortfolio());
  };

  const handleSell = () => {
    sellStock(user, symbol, quantity).then(() => fetchPortfolio());
  };

  return (
    <div>
      <h2>💼 Portfolio</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPortfolio();
        }}
      >
        <input
          type="text"
          placeholder="Enter User Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Load Portfolio</button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button type="button" onClick={handleBuy}>
          Buy
        </button>
        <button type="button" onClick={handleSell}>
          Sell
        </button>
      </form>

      {portfolio.length > 0 && chartData && (
        <div className="portfolio-container">
          <div className="portfolio-chart">
            <Pie data={chartData} />
          </div>

          <table className="portfolio-table">
            <thead>
              <tr>
                <th>Stock Symbol</th>
                <th>Quantity</th>
                <th>Total Investment</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.stockSymbol}</td>
                  <td>{item.quantity}</td>
                  <td>${item.totalInvestment.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
