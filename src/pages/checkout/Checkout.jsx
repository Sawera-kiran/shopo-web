import "./Checkout.css";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";
import BillingForm from "../../components/checkout/BillingForm/BillingForm";
import OrderSummary from "../../components/checkout/OrderSummary/OrderSummary";
function Checkout() {
  return (
    <section className="checkout-page">
      <div className="container">
        {/* Breadcrumb */}

        <div className="breadcrumb">
          <span>Home</span>

          <span>/</span>

          <span>Checkout</span>
        </div>

        {/* Page Title */}

        <h1 className="checkout-title">Checkout</h1>

        {/* Top Notice */}

        <div className="checkout-top">
          <div className="checkout-notice">Log into your Account</div>

          <div className="checkout-notice">Enter Coupon Code</div>
        </div>

        {/* Main Layout */}

        <div className="checkout-layout">
          <div className="checkout-left">
            <BillingForm />
          </div>

          <div className="checkout-right">
            <OrderSummary />
          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  );
}

export default Checkout;
