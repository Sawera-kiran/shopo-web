import "./CartTable.css";
import QuantitySelector from "../../product-details/QuantitySelector/QuantitySelector";
import { IoClose } from "react-icons/io5";

import { useCart } from "../../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
function CartTable() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">
          <IoBagHandleOutline />
        </div>

        <h2>Your Cart is Empty</h2>

        <p>Looks like you haven't added any products yet.</p>

        <Link to="/shop" className="empty-cart-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-table-wrapper">
      <table className="cart-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="cart-product">
                  <img src={item.thumbnail} alt={item.title} />

                  <div className="cart-product-info">
                    <h4>{item.title}</h4>

                    <span>{item.brand}</span>
                  </div>
                </div>
              </td>

              <td className="cart-price">${item.price.toFixed(2)}</td>

              <td>
                <QuantitySelector
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                  showLabel={false}
                />
              </td>

              <td className="cart-total">
                ${(item.price * item.quantity).toFixed(2)}
              </td>

              <td>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <IoClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
