import "./AddressSection.css";

import { IoLocationOutline } from "react-icons/io5";

function AddressSection() {
  const billingAddress = {
    name: "John Doe",
    company: "ShopO Inc.",
    street: "4517 Washington Ave.",
    city: "Manchester",
    state: "Kentucky",
    zip: "39495",
    country: "United States",
    phone: "+1 234 567 890",
    email: "johndoe@example.com",
  };

  const shippingAddress = {
    name: "John Doe",
    company: "ShopO Inc.",
    street: "1901 Thornridge Cir.",
    city: "Syracuse",
    state: "Connecticut",
    zip: "35624",
    country: "United States",
    phone: "+1 987 654 321",
    email: "shipping@example.com",
  };

  return (
    <section className="address-section">
      <div className="section-header">
        <h2>My Addresses</h2>
      </div>

      <div className="address-grid">
        <div className="address-card">
          <div className="address-card-header">
            <div className="address-title">
              <IoLocationOutline />

              <h3>Billing Address</h3>
            </div>

            <button type="button">Edit</button>
          </div>

          <div className="address-content">
            <div className="address-row">
              <span className="address-label">Name:</span>

              <span>{billingAddress.name}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Email:</span>

              <span>{billingAddress.email}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Phone:</span>

              <span>{billingAddress.phone}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Country:</span>

              <span>{billingAddress.country}</span>
            </div>

            <div className="address-row">
              <span className="address-label">State:</span>

              <span>{billingAddress.state}</span>
            </div>

            <div className="address-row">
              <span className="address-label">City:</span>

              <span>{billingAddress.city}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Street:</span>

              <span>{billingAddress.street}</span>
            </div>

            <div className="address-row">
              <span className="address-label">ZIP Code:</span>

              <span>{billingAddress.zip}</span>
            </div>
          </div>
        </div>

        <div className="address-card">
          <div className="address-card-header">
            <div className="address-title">
              <IoLocationOutline />

              <h3>Shipping Address</h3>
            </div>

            <button type="button">Edit</button>
          </div>

          <div className="address-content">
            <div className="address-row">
              <span className="address-label">Name:</span>

              <span>{billingAddress.name}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Email:</span>

              <span>{billingAddress.email}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Phone:</span>

              <span>{billingAddress.phone}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Country:</span>

              <span>{billingAddress.country}</span>
            </div>

            <div className="address-row">
              <span className="address-label">State:</span>

              <span>{billingAddress.state}</span>
            </div>

            <div className="address-row">
              <span className="address-label">City:</span>

              <span>{billingAddress.city}</span>
            </div>

            <div className="address-row">
              <span className="address-label">Street:</span>

              <span>{billingAddress.street}</span>
            </div>

            <div className="address-row">
              <span className="address-label">ZIP Code:</span>

              <span>{billingAddress.zip}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="add-address-wrapper">
        <button type="button" className="add-address-btn">
          Add New Address
        </button>
      </div>
    </section>
  );
}

export default AddressSection;
