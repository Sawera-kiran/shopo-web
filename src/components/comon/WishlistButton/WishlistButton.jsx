import "./WishlistButton.css";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useWishlist } from "../../../context/WishlistContext/WishlistContext";

function WishlistButton({ product, variant = "card" }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const added = isInWishlist(product.id);

  function handleWishlist() {
    if (added) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <button
      type="button"
      className={`wishlist-button ${variant} ${added ? "active" : ""}`}
      onClick={handleWishlist}
    >
      {added ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}

export default WishlistButton;
