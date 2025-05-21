import React, { useState } from "react";
import { getPortfolio } from "../services/api";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  const [user, setUser] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [chartData, setChartData] = useState(null);

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
