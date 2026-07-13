import "./QuantitySelector.css";

import { useState } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";

function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  showLabel = true,
}) {
  const [internalQuantity, setInternalQuantity] = useState(1);

  const currentQuantity =
    quantity !== undefined ? quantity : internalQuantity;

  const handleIncrease = () => {
    if (onIncrease) {
      onIncrease();
    } else {
      setInternalQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (onDecrease) {
      onDecrease();
    } else {
      if (internalQuantity > 1) {
        setInternalQuantity((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="product-details-quantity">

      {showLabel && <h4>Quantity</h4>}

      <div className="product-details-quantity-box">

        <button onClick={handleDecrease}>
          <FiMinus />
        </button>

        <span>{currentQuantity}</span>

        <button onClick={handleIncrease}>
          <FiPlus />
        </button>

      </div>

    </div>
  );
}

export default QuantitySelector;