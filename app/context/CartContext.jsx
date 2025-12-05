"use client";
import { createContext, useContext, useState } from "react";
const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const addToCart = () => setCount(count + 1);
  return <CartContext.Provider value={{ count, addToCart }}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);