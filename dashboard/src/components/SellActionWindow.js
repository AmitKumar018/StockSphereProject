import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid, availableQty }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
    if (stockQuantity > availableQty) {
      alert(`Insufficient quantity. You can sell up to ${availableQty} shares.`);
      return;
    }

    axios
      .post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      })
      .then(() => {
        alert("Sell order placed!");
        closeSellWindow();
      })
      .catch((err) => {
        console.error("Sell order failed:", err);
        alert("Sell order failed: " + err.message);
      });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSellClick();
        }}
      >
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                min="1"
                max={availableQty}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
                value={stockQuantity}
                required
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                min="0"
                onChange={(e) => setStockPrice(Number(e.target.value))}
                value={stockPrice}
                required
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Estimated revenue ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
          <div>
            <button
              type="submit"
              className="btn btn-red"
              disabled={
                stockQuantity > availableQty ||
                stockQuantity <= 0 ||
                stockPrice <= 0
              }
            >
              Sell
            </button>
            <button
              type="button"
              className="btn btn-grey"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellActionWindow;
