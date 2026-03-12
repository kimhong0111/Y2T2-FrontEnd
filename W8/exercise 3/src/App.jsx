import React, { useState } from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  { product: "Banana", price: 54.6, quantity: 3 },
  { product: "Computer", price: 100.5, quantity: 4 },
  { product: "Table", price: 1070, quantity: 3 },
];

export default function App() {
  const [orders, setOrders] = useState(ORDERS);

  function handlePlus(index) {
    setOrders(orders.map((order, i) =>
      i === index ? { ...order, quantity: order.quantity + 1 } : order
    ));
  }

  function handleMinus(index) {
    setOrders(orders.map((order, i) =>
      i === index ? { ...order, quantity: Math.max(0, order.quantity - 1) } : order
    ));
  }

  const total = orders.reduce((sum, order) => sum + order.price * order.quantity, 0).toFixed(2);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>
      <div className="order-list">
        <OrderCard stuffs={orders} onPlus={handlePlus} onMinus={handleMinus} />
      </div>
      <CheckoutButton total={total} />
    </>
  );
}