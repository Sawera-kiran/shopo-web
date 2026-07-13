import "./Cart.css";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";
import CartTable from "../../components/cart/CartTable/CartTable";
import CouponSection from "../../components/cart/CouponSection/CouponSection";
import CartSummary from "../../components/cart/CartSummary/CartSummary";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();

  return (
    <section className="cart-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Cart</span>
        </div>

        <CartTable />

        <div className="cart-actions">
          <CouponSection />

          <div className="cart-buttons">
            <button
              className="continue-shopping-btn"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>

            <button className="update-cart-btn">Update Cart</button>
          </div>
        </div>

        <div className="cart-bottom">
          <CartSummary />
        </div>
      </div>

      <Newsletter />
    </section>
  );
}

export default Cart;
