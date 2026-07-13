import "./CouponSection.css";

function CouponSection() {
  return (
    <div className="coupon-section">

      <input
        type="text"
        placeholder="Discount Code"
      />

      <button>
        Apply
      </button>

    </div>
  );
}

export default CouponSection;