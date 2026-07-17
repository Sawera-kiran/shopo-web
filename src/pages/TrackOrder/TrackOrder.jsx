import "./TrackOrder.css";

import { useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";

function TrackOrder() {
  const [trackingData, setTrackingData] = useState({
    orderNumber: "",
    deliveryDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setTrackingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(trackingData);

    alert("Tracking feature will be connected to the backend later.");
  }

  return (
    <>
      <section className="track-order-page">
        <div className="container">
          <div className="track-order-header">
            <h2>Track Your Order</h2>

            <p>
              Enter your order tracking number and your expected delivery date
              to track your order.
            </p>
          </div>

          <div className="track-order-card">
            <div className="track-order-left">
              <form className="track-order-form" onSubmit={handleSubmit}>
                <div className="track-order-group">
                  <label htmlFor="orderNumber">Order Tracking Number *</label>

                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    placeholder="Order Number"
                    value={trackingData.orderNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="track-order-group">
                  <label htmlFor="deliveryDate">Delivery Date</label>

                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={trackingData.deliveryDate}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="track-order-btn">
                  Track Now
                </button>
              </form>
            </div>

            <div className="track-order-right">
              <FaTruckFast className="track-order-icon" />
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default TrackOrder;
