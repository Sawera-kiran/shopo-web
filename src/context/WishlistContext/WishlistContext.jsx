import { createContext, useContext, useReducer } from "react";

import {
  wishlistInitialState,
  wishlistReducer,
} from "./WishlistReducer";

import { useCart } from "../CartContext/CartContext";

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(
    wishlistReducer,
    wishlistInitialState
  );

  const {
    addToCart,
  } = useCart();

  const addToWishlist = (product) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  };

  const removeFromWishlist = (id) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const clearWishlist = () => {
    dispatch({
      type: "CLEAR_WISHLIST",
    });
  };

  const addAllToCart = () => {
    state.wishlistItems.forEach((item) => {
      addToCart(item, item.quantity);
    });
  };

  const isInWishlist = (id) => {
    return state.wishlistItems.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems: state.wishlistItems,

        addToWishlist,

        removeFromWishlist,

        increaseQuantity,

        decreaseQuantity,

        clearWishlist,

        addAllToCart,

        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  return useContext(WishlistContext);
}

export {
  WishlistProvider,
  useWishlist,
};