import "./Wishlist.css";

import { Link } from "react-router-dom";

import { IoClose, IoHeartOutline } from "react-icons/io5";

import QuantitySelector from "../../components/product-details/QuantitySelector/QuantitySelector";
import AnimatedAddToCartButton from "../../components/comon/AnimatedAddToCartButton/AnimatedAddToCartButton";
import AddAllToCartButton from "../../components/comon/AddAllToCartButton/AddAllToCartButton";

import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    increaseQuantity,
    decreaseQuantity,
    clearWishlist,
  } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <section className="wishlist-page">
        <div className="container">
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">
              <IoHeartOutline />
            </div>

            <h2>Your Wishlist is Empty</h2>

            <p>Save products you love and they'll appear here.</p>

            <Link to="/shop" className="empty-wishlist-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="wishlist-page">
        <div className="container">
          <h1 className="wishlist-title">My Wishlist</h1>

          <div className="wishlist-table-wrapper">
            <table className="wishlist-table">
              <thead>
                <tr>
                  <th>Product</th>

                  <th>Price</th>

                  <th>Quantity</th>

                  <th>Total</th>

                  <th>Add To Cart</th>

                  <th></th>
                </tr>
              </thead>

              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="wishlist-product">
                        <img src={item.thumbnail} alt={item.title} />

                        <div className="wishlist-product-info">
                          <Link to={`/product/${item.id}`}>{item.title}</Link>

                          <span>{item.brand}</span>
                        </div>
                      </div>
                    </td>

                    <td className="wishlist-price">${item.price}</td>

                    <td>
                      <QuantitySelector
                        quantity={item.quantity}
                        onIncrease={() => increaseQuantity(item.id)}
                        onDecrease={() => decreaseQuantity(item.id)}
                        showLabel={false}
                        variant="compact"
                      />
                    </td>

                    <td className="wishlist-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    <td>
                      <AnimatedAddToCartButton
                        product={item}
                        quantity={item.quantity}
                        variant="table"
                      />
                    </td>

                    <td>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <IoClose />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="wishlist-bottom">
            <button
              type="button"
              className="wishlist-clear-btn"
              onClick={clearWishlist}
            >
              Clear Wishlist
            </button>

            <AddAllToCartButton />
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default Wishlist;
