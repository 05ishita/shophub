import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
import { Link } from "react-router-dom";

function Wishlist() {

  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <h1>❤️ Wishlist</h1>
        <h2>No products in wishlist.</h2>
      </div>
    );
  }

  return (
    <div className="wishlist-page">

      <h1>❤️ My Wishlist</h1>

      <div className="wishlist-grid">

        {wishlist.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <h2>₹ {product.price}</h2>

            <button
              className="remove-btn"
              onClick={() => toggleWishlist(product)}
            >
              Remove
            </button>

            <Link to={`/product/${product.id}`}>
              <button className="details-btn">
                View Details
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Wishlist;