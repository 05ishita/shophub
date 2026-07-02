



import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import { useState, useEffect } from "react";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getUser() {

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      const data = await response.json();

      setUser(data);

    } catch (err) {

      setError("Something went wrong!");

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
   <>
     <Navbar />

  <Routes>

  <Route path="/" element={<Product />} />

  <Route path="/about" element={<About />} />

  <Route path="/contact" element={<Contact />} />

  <Route path="/product" element={<Product />} />

  <Route path="/product/:id" element={<ProductDetails />} />

</Routes>
</>
);

}

export default App;