import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.product.id !== product.id));
    }
  };

  return (
    <div className="flex">
      <ProductList
        products={Products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
