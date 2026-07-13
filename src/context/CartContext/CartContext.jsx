import { createContext, useContext, useMemo, useReducer } from "react";

import { cartInitialState, cartReducer } from "./CartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
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

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const subtotal = useMemo(() => {
    return state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [state.cartItems]);

  const shipping = useMemo(() => {
    if (subtotal === 0) return 0;

    return subtotal >= 100 ? 0 : 10;
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + shipping;
  }, [subtotal, shipping]);

  const totalItems = useMemo(() => {
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,

        subtotal,

        shipping,

        total,

        totalItems,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
