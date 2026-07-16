import "./AnimatedAddToCartButton.css";

import { useState } from "react";

import {
  IoBagHandleOutline,
  IoCheckmark,
} from "react-icons/io5";

import { toast } from "react-toastify";

import { useCart } from "../../../context/CartContext/CartContext";

function AnimatedAddToCartButton({
  product,
  quantity = 1,
  variant = "card",
}) {
  const { addToCart } = useCart();

  const [isAdded, setIsAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product, quantity);

    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      className={`animated-cart-btn ${variant} ${
        isAdded ? "added" : ""
      }`}
      onClick={handleAddToCart}
    >
      {isAdded ? (
        <>
          <IoCheckmark />
          Added To Cart
        </>
      ) : (
        <>
          <IoBagHandleOutline />
          Add To Cart
        </>
      )}
    </button>
  );
}

export default AnimatedAddToCartButton;