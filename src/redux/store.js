import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


//redux ka store banane ke liye function import kiya
const store = configureStore({
//Naya Redux Store create kiya
  reducer: {
//Abhi koi reducer nahi hai.
  cart: cartReducer,
  },

});

export default store;