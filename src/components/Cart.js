// src/components/Cart.js
import React from "react";

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };
  return (
    <div className="w-1/2 p-4 shadow-lg bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-around border bg-slate-300">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="italic">No Product added to the cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.product.id} className="mb-2">
              {item.product.name} - Quantity: {item.quantity} - Total: Rs 
               {item.product.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <hr className="my-4" />
      <p className="text-xl font-bold">Total: Rs {calculateTotal().toFixed(2)}</p>
    </div>
  );
};

export default Cart;
