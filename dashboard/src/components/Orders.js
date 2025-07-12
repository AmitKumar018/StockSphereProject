import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders") // Replace with your deployed backend URL if needed
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="orders"><p>Loading orders...</p></div>;
  }

  if (error) {
    return <div className="orders"><p>{error}</p></div>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>{order.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
