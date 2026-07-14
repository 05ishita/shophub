import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import Navbar from "./components/Navbar";

import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setUser(data);

    } catch {

      setError("Unable to load user information.");

    } finally {

      setLoading(false);

    }
  }

  if (loading) {
    return (
      <div className="page-status">
        <h2>Loading ShopHub...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-status error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Product user={user} />} />

        <Route path="/product" element={<Product user={user} />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

<Route
  path="/cart"
  element={<Cart />}
/>

<Route
  path="/wishlist"
  element={<Wishlist />}
/>

      </Routes>
    </>
  );
}

export default App;