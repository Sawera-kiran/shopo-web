import "./Wishlist.css";

import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import EmptyWishlist from "../../components/wishlist/EmptyWishlist/EmptyWishlist";
import QuantitySelector from "../../components/product-details/QuantitySelector/QuantitySelector";

import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import { useCart } from "../../context/CartContext/CartContext";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    increaseQuantity,
    decreaseQuantity,
    clearWishlist,
    addAllToCart,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <section className="wishlist-page">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>

            <span>/</span>

            <span>Wishlist</span>
          </div>

          <h1 className="wishlist-title">Wishlist</h1>

          <EmptyWishlist />
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>

          <span>/</span>

          <span>Wishlist</span>
        </div>

        <h1 className="wishlist-title">Wishlist</h1>

        <div className="wishlist-table-wrapper">
          <table className="wishlist-table">
            <thead>
              <tr>
                <th>PRODUCT</th>

                <th>PRICE</th>

                <th>QUANTITY</th>

                <th>TOTAL</th>

                <th>ADD TO CART</th>

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

                  <td className="wishlist-price">${item.price.toFixed(2)}</td>

                  <td>
                    <QuantitySelector
                      quantity={item.quantity}
                      onIncrease={() => increaseQuantity(item.id)}
                      onDecrease={() => decreaseQuantity(item.id)}
                      showLabel={false}
                    />
                  </td>

                  <td className="wishlist-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>

                  <td>
                    <button
                      className="wishlist-cart-btn"
                      onClick={() => addToCart(item, item.quantity)}
                    >
                      Add To Cart
                    </button>
                  </td>

                  <td>
                    <button
                      className="wishlist-remove-btn"
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
          <button className="wishlist-clear-btn" onClick={clearWishlist}>
            Clear Wishlist
          </button>

          <button className="wishlist-add-all-btn" onClick={addAllToCart}>
            Add All To Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
