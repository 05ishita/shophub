import { createContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Add or Remove Product
  function toggleWishlist(product) {

    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {

      setWishlist(
        wishlist.filter(
          (item) => item.id !== product.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        product,
      ]);

    }
  }

  // Clear Wishlist
  function clearWishlist() {

    setWishlist([]);

  }

  // Save Wishlist
  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        clearWishlist,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

}

export default WishlistContext;