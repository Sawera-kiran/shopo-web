import "./QuantitySelector.css";

import { FiMinus, FiPlus } from "react-icons/fi";

function QuantitySelector({
  quantity = 1,
  onIncrease,
  onDecrease,
  showLabel = true,
}) {
  return (
    <div className="product-details-quantity">
      {showLabel && <h4>Quantity</h4>}

      <div className="product-details-quantity-box">
        <button
          type="button"
          onClick={onDecrease}
          aria-label="Decrease Quantity"
        >
          <FiMinus />
        </button>

        <span>{quantity}</span>

        <button
          type="button"
          onClick={onIncrease}
          aria-label="Increase Quantity"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;