import "./PaymentMethods.css";

import { useState } from "react";
import { paymentMethods } from "../../../data/paymentMethods";

function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("bank");

  return (
    <div className="payment-methods">

      {paymentMethods.map((method) => (

        <label
          key={method.id}
          className="payment-label"
        >

          <input
            type="radio"
            name="payment"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={() => setSelectedMethod(method.id)}
          />

          <span>{method.title}</span>

        </label>

      ))}

      <button className="place-order-btn">
        Place Order
      </button>

    </div>
  );
}

export default PaymentMethods;