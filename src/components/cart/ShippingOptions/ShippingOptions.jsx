import "./ShippingOptions.css";

function ShippingOptions({ shipping, setShipping }) {
  return (
    <div className="shipping-options">

      <h3>Shipping</h3>

      <label className="shipping-option">

        <div>

          <input
            type="radio"
            name="shipping"
            checked={shipping === "free"}
            onChange={() => setShipping("free")}
          />

          <span>Free Shipping</span>

        </div>

        <span>+$0.00</span>

      </label>

      <label className="shipping-option">

        <div>

          <input
            type="radio"
            name="shipping"
            checked={shipping === "flat"}
            onChange={() => setShipping("flat")}
          />

          <span>Flat Rate</span>

        </div>

        <span>+$10.00</span>

      </label>

      <label className="shipping-option">

        <div>

          <input
            type="radio"
            name="shipping"
            checked={shipping === "local"}
            onChange={() => setShipping("local")}
          />

          <span>Local Delivery</span>

        </div>

        <span>+$20.00</span>

      </label>

    </div>
  );
}

export default ShippingOptions;