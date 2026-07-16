import "./QuantitySelector.css";

import { FiMinus, FiPlus } from "react-icons/fi";

function QuantitySelector({
  quantity = 1,
  onIncrease,
  onDecrease,
  showLabel = true,
  variant = "default",
}) {
  return (
    <div className={`quantity-selector ${variant}`}>
      {showLabel && <h4>Quantity</h4>}

      <div className={`quantity-selector-box ${variant}`}>
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