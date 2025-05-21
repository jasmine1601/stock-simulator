import React, { useEffect, useState } from "react";
import { getStocks, updateStockPrice } from "../services/api";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

function StockList() {
  const [stocks, setStocks] = useState([]);
  const [editingSymbol, setEditingSymbol] = useState(null);
  const [editedPrice, setEditedPrice] = useState("");

  useEffect(() => {
    getStocks().then((response) => setStocks(response.data));
  }, []);

  const handleEdit = (symbol, currentPrice) => {
    setEditingSymbol(symbol);
    setEditedPrice(currentPrice);
  };

  const handleCancel = () => {
    setEditingSymbol(null);
    setEditedPrice("");
  };

  const handleSave = async (symbol) => {
    await updateStockPrice(symbol, parseFloat(editedPrice));
    const response = await getStocks();
    setStocks(response.data);
    setEditingSymbol(null);
    setEditedPrice("");
  };

  return (
    <div>
      <h2>📊 Stocks</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.symbol}</td>
              <td>{stock.price}</td>
              <td>
                {editingSymbol === stock.symbol ? (
                  <>
                    <input
                      type="number"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                      style={{ width: "80px", marginRight: "8px" }}
                    />
                    <button onClick={() => handleSave(stock.symbol)}>
                      <FaSave />
                    </button>
                    <button
                      onClick={handleCancel}
                      style={{ marginLeft: "4px" }}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(stock.symbol, stock.price)}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
