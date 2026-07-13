import "./BillingForm.css";

import { useState } from "react";

import FormInput from "../../../components/comon/Form/FormInput/FormInput";
import FormCheckbox from "../../comon/Form/FormCheckbox/FormCheckbox";
import FormTextarea from "../../../components/comon/Form/FormTextarea/FormTextarea";
import CustomSelect from "../../../components/comon/CustomSelect/CustomSelect";

import { countryOptions } from "../../../data/selectOptions";

function BillingForm() {
  const [billingData, setBillingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    zip: "",
    notes: "",
  });

  const [createAccount, setCreateAccount] = useState(false);
  const [shipDifferent, setShipDifferent] = useState(false);

  const handleChange = (field, value) => {
    setBillingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="billing-form">

      <h2>Billing Details</h2>

      <div className="billing-grid">

        <FormInput
          label="First Name"
          required
          placeholder="John"
          value={billingData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />

        <FormInput
          label="Last Name"
          required
          placeholder="Doe"
          value={billingData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />

        <FormInput
          label="Email Address"
          type="email"
          required
          placeholder="john@email.com"
          value={billingData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <FormInput
          label="Phone Number"
          required
          placeholder="+92 300 1234567"
          value={billingData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

      </div>

      <div className="billing-full">

        <label className="billing-label">
          Country <span>*</span>
        </label>

        <CustomSelect
          options={countryOptions}
          placeholder="Select Country"
          value={countryOptions.find(
            (item) => item.value === billingData.country
          )}
          onChange={(option) =>
            handleChange("country", option?.value || "")
          }
        />

      </div>

      <div className="billing-full">

        <FormInput
          label="Street Address"
          required
          placeholder="House number and street name"
          value={billingData.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />

      </div>

      <div className="billing-grid">

        <FormInput
          label="Town / City"
          required
          placeholder="Lahore"
          value={billingData.city}
          onChange={(e) => handleChange("city", e.target.value)}
        />

        <FormInput
          label="Postcode / ZIP"
          required
          placeholder="54000"
          value={billingData.zip}
          onChange={(e) => handleChange("zip", e.target.value)}
        />

      </div>

      <div className="billing-checkboxes">

        <FormCheckbox
          label="Create an account?"
          checked={createAccount}
          onChange={() => setCreateAccount(!createAccount)}
        />

        <FormCheckbox
          label="Ship to a different address?"
          checked={shipDifferent}
          onChange={() => setShipDifferent(!shipDifferent)}
        />

      </div>

      <div className="billing-notes">

        <FormTextarea
          label="Order Notes"
          placeholder="Notes about your order, delivery instructions, etc."
          value={billingData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
        />

      </div>

    </div>
  );
}

export default BillingForm;