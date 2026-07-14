import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import store from "./redux/store";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        
          <WishlistProvider>

            <App />

            <ToastContainer
              position="top-right"
              autoClose={2000}
              newestOnTop
              theme="colored"
            />

          </WishlistProvider>
        
      </Provider>
    </BrowserRouter>
  </StrictMode>
);