import "./OrderSummary.css";

import { useCart } from "../../../context/CartContext/CartContext";
import PaymentMethods from "../PaymentMethods/PaymentMethods";

function OrderSummary() {
  const {
    cartItems,
    subtotal,
    shipping,
    total,
  } = useCart();

  return (
    <div className="order-summary">

      <h2>Order Summary</h2>

      <div className="summary-header">

        <span>Product</span>

        <span>Total</span>

      </div>

      <div className="summary-products">

        {cartItems.length === 0 ? (

          <div className="empty-summary">

            Your cart is empty.

          </div>

        ) : (

          cartItems.map((item) => (

            <div
              key={item.id}
              className="summary-product"
            >

              <div className="summary-left">

                <h4>

                  {item.title}

                  <span> × {item.quantity}</span>

                </h4>

              </div>

              <div className="summary-price">

                ${(item.price * item.quantity).toFixed(2)}

              </div>

            </div>

          ))

        )}

      </div>

      <div className="summary-row">

        <span>Subtotal</span>

        <strong>${subtotal.toFixed(2)}</strong>

      </div>

      <div className="summary-row">

        <span>Shipping</span>

        <strong>

          {shipping === 0
            ? "Free Shipping"
            : `$${shipping.toFixed(2)}`}

        </strong>

      </div>

      <div className="summary-total">

        <span>Total</span>

        <span className="total-price">

          ${total.toFixed(2)}

        </span>

      </div>

      <PaymentMethods />

    </div>
  );
}

export default OrderSummary;