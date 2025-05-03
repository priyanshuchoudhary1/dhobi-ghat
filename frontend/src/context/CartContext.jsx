import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);  // Compare using item.id

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }  // Increase quantity if item exists
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];  // Add new item with quantity 1
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)  // Remove item if quantity is zero
    );
  };

  const deleteItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)  // Delete item based on id
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
