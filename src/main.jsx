


import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { WishlistProvider } from "./context/WishlistContext";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <WishlistProvider>

    <Provider store={store}>

      <CartProvider>

        <App />

        <ToastContainer />

      </CartProvider>

    </Provider>

  </WishlistProvider>
</BrowserRouter>
    

  </StrictMode>
) ;
