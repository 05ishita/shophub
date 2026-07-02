import { createContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

 const [wishlist, setWishlist] = useState(() => {

  const savedWishlist = localStorage.getItem("wishlist");

  return savedWishlist ? JSON.parse(savedWishlist) : [];

});

  function toggleWishlist(product) {

    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  }

  useEffect(() => {

  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );

}, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContext;