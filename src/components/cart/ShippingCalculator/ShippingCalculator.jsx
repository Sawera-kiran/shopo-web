import "./ShippingCalculator.css";
import CustomSelect from "../../comon/CustomSelect/CustomSelect";
import { useState } from "react";
import { countryOptions } from "../../../data/selectOptions";

function ShippingCalculator() {
  const [country, setCountry] = useState("");

  const [zipCode, setZipCode] = useState("");

  const handleUpdateCart = () => {
    console.log({
      country,
      zipCode,
    });
  };

  return (
    <div className="shipping-calculator">
      <h3>Calculate Shipping</h3>

      <CustomSelect
        options={countryOptions}
        placeholder="Select Country"
        value={countryOptions.find((option) => option.value === country)}
        onChange={(selectedOption) => setCountry(selectedOption?.value || "")}
      />

      <input
        type="text"
        placeholder="Postcode / ZIP"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />

      <button onClick={handleUpdateCart}>Update Cart</button>
    </div>
  );
}

export default ShippingCalculator;
