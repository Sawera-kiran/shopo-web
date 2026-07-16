import "./AddAllToCartButton.css";

import { useState } from "react";

import {
  IoBagHandleOutline,
  IoCheckmark,
} from "react-icons/io5";

import { toast } from "react-toastify";

import { useWishlist } from "../../../context/WishlistContext/WishlistContext";

function AddAllToCartButton() {
  const { addAllToCart } = useWishlist();

  const [isAdded, setIsAdded] = useState(false);

  function handleClick() {
    const totalProducts = addAllToCart();

    if (totalProducts === 0) return;

    toast.success(
      `${totalProducts} wishlist products added to cart!`,
      {
        position: "top-right",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }
    );

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      className={`add-all-cart-btn ${
        isAdded ? "added" : ""
      }`}
      onClick={handleClick}
    >
      {isAdded ? (
        <>
          <IoCheckmark />
          Added To Cart
        </>
      ) : (
        <>
          <IoBagHandleOutline />
          Add All To Cart
        </>
      )}
    </button>
  );
}

export default AddAllToCartButton;