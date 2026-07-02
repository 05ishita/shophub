import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart as addToCartRedux} from "../redux/cartSlice";


function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const dispatch = useDispatch();

  // Context se wishlist data liya
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  // Check ki product wishlist me hai ya nahi
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <h2>₹ {product.price}</h2>

      <p>
        ⭐ {product.rating.rate} ({product.rating.count} Reviews)
      </p>

      {/* Wishlist Button */}
      <button onClick={() => toggleWishlist(product)}>
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      {/* Add To Cart Button */}
      <button
        onClick={() => {
         dispatch(addToCartRedux(product));
          toast.success("Product Added Successfully");
        }}
      >
        Add to Cart
      </button>

      {/* Product Details Button */}
      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

import { memo } from "react";

export default memo(ProductCard);
//React unnecessary re-render kam karega.