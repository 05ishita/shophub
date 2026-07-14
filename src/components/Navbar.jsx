import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const cart = useSelector((state) => state.cart.cart);

  return (

    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          🛍️ <span>ShopHub</span>
        </Link>
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/product">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>

      </ul>

      <div className="nav-right">

        <Link to="/wishlist" className="icon-btn">
          ❤️ Wishlist
        </Link>

        <Link
  to="/cart"
  className="cart-btn"
>

🛒 Cart

<span className="cart-count">
{cart.length}
</span>

<li>
  <Link to="/wishlist">
    ❤️ Wishlist
  </Link>
</li>

</Link>

      </div>

    </nav>

  );
}

export default Navbar;