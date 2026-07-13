import "./CartSummary.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../../../context/CartContext/CartContext";

import ShippingOptions from "../ShippingOptions/ShippingOptions";
import ShippingCalculator from "../ShippingCalculator/ShippingCalculator";

function CartSummary() {
  const { subtotal } = useCart();

  const [shipping, setShipping] = useState("free");

  const shippingCost = shipping === "free" ? 0 : shipping === "flat" ? 10 : 20;

  const total = subtotal + shippingCost;

  return (
    <div className="cart-summary">
      <h2>Cart Totals</h2>

      <div className="summary-row">
        <span>Subtotal</span>

        <span>${subtotal.toFixed(2)}</span>
      </div>

      <ShippingOptions shipping={shipping} setShipping={setShipping} />

      <ShippingCalculator />

      <div className="summary-row total-row">
        <span>Total</span>

        <span>${total.toFixed(2)}</span>
      </div>

      <Link to="/checkout" className="checkout-btn">
        Proceed To Checkout
      </Link>
    </div>
  );
}

export default CartSummary;
