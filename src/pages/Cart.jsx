import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {

  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>🛒 Your Cart</h1>
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>🛒 My Cart</h1>

      {cart.map((item) => (

        <div
          className="cart-item"
          key={item.id}
        >

          <img
            src={item.image}
            alt={item.title}
          />

          <div>

            <h3>{item.title}</h3>

            <h2>₹ {item.price}</h2>

          </div>

          <button
            className="remove-btn"
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>

        </div>

      ))}

      <h2>Total : ₹ {totalPrice.toFixed(2)}</h2>

      <button
        className="clear-btn"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>

    </div>
  );
}

export default Cart;