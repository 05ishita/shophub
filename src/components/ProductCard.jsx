import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import WishlistContext from "../context/WishlistContext";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  function handleCart() {

    dispatch(addToCart(product));

    toast.success("Product added to cart!");

  }

  return (

    <div className="product-card">

      <button
        className="wishlist-btn"
        onClick={() => toggleWishlist(product)}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p className="category">
        {product.category}
      </p>

      <div className="rating">

        ⭐ {product.rating.rate}

        <span>
          ({product.rating.count} Reviews)
        </span>

      </div>

      <h2 className="price">

        ₹ {product.price}

      </h2>

      <div className="card-buttons">

        <button
          className="cart-btn"
          onClick={handleCart}
        >
          Add to Cart
        </button>

        <Link to={`/product/${product.id}`}>

          <button className="details-btn">

            View Details

          </button>

        </Link>

      </div>

    </div>

  );

}

export default memo(ProductCard);