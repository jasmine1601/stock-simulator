import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import StockList from "./components/StockList";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>📈 Stock Simulator 📉</h1>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Stocks
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<StockList />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
