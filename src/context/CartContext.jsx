import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

  const savedCart = localStorage.getItem("cart");

  return savedCart ? JSON.parse(savedCart) : [];

}); // Refresh ke baad bhi cart load hoga.

  function addToCart(product) {
console.log("Button clicked:", product);

    setCart([...cart, product]);

  }


  useEffect(() => {

  localStorage.setItem(
    "cart",                 
      // Cart change hote hi LocalStorage me save.
    JSON.stringify(cart)
  );

}, [cart]);


  return (

    <CartContext.Provider
      value={{ cart, addToCart }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartContext;