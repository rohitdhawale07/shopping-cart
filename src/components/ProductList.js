import React from "react";

const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className="w-1/2 p-4 shadow-lg bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-around border bg-slate-300">
        Product List
      </h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-around mb-2"
          >
            <span>
              {product.name} - Rs {product.price}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => addToCart(product)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
