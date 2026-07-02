
import { useSelector } from "react-redux";
import { useContext } from "react";
import CartContext from "../context/CartContext";
// useContext → Context ka data use karne ke liye

// CartContext → Cart ka shared data import kiya
import { Link } from "react-router-dom";
function Navbar() {
 const cart = useSelector((state) => state.cart.cart);
  return (

    <nav className="navbar">

      <h2>🛍️ ShopHub</h2>

      <p>🛒 Cart ({cart.length})</p>
      


      <ul>      

       <li><Link to="/">Home</Link></li>

<li><Link to="/product">Product</Link></li>

<li><Link to="/about">About</Link></li>

<li><Link to="/contact">Contact</Link></li>

      </ul>

    </nav>

  );

}

export default Navbar;