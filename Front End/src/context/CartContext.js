import React, { createContext, useState, useEffect } from "react";
import Product from "../components/Product";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //check already entered item
    const CartItem = cart.find((item) => {
      return item.id == id;
    });
    if (CartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id == id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
