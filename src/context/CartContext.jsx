"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const newProduct = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      currency: product.currency || "USD",
      image: product.image,
      quantity: 1,
    };

    setCart((prev) => {
      const existing = prev.find((item) => item.id === newProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, newProduct];
    });
  };

  // Update quantity of a product
  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(qty, 1) } : item
      )
    );
  };

  // Remove a product from cart
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => useContext(CartContext);