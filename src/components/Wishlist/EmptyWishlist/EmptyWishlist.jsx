import "./EmptyWishlist.css";

import { Link } from "react-router-dom";
import { IoHeartDislikeOutline } from "react-icons/io5";

function EmptyWishlist() {
  return (
    <section className="empty-wishlist">
      <div className="empty-wishlist-icon">
        <IoHeartDislikeOutline />
      </div>

      <h2>Your Wishlist is Empty</h2>

      <p>
        Looks like you haven't added any products to your wishlist yet.
        Start exploring our collection and save your favorite items.
      </p>

      <Link
        to="/shop"
        className="continue-shopping-btn"
      >
        Continue Shopping
      </Link>
    </section>
  );
}

export default EmptyWishlist;