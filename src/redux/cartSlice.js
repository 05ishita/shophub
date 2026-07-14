import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const alreadyExists = state.cart.find(
        (item) => item.id === product.id
      );

      if (!alreadyExists) {
        state.cart.push(product);
        localStorage.setItem(
          "cart",
          JSON.stringify(state.cart)
        );
      }
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart)
      );
    },

    clearCart(state) {
      state.cart = [];

      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;