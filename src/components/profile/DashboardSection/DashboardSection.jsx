import "./DashboardSection.css";

import {
  IoCubeOutline,
  IoLocationOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";

function DashboardSection() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            <IoCubeOutline />
          </div>

          <h3>Orders</h3>

          <p>View your order history and track current orders.</p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            <IoLocationOutline />
          </div>

          <h3>Addresses</h3>

          <p>
            Manage your billing and shipping addresses in one place.
          </p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            <IoHeartOutline />
          </div>

          <h3>Reviews</h3>

          <p>
            View and manage all the product reviews you've submitted.
          </p>
        </div>
      </div>

      <div className="dashboard-info-grid">
        <div className="dashboard-info-card">
          <div className="dashboard-info-title">
            <IoPersonOutline />

            <h3>Personal Information</h3>
          </div>

          <div className="dashboard-info-content">
            <p>
              <strong>Name:</strong> John Doe
            </p>

            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>

            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>

            <button type="button">
              Edit Information
            </button>
          </div>
        </div>

        <div className="dashboard-info-card">
          <div className="dashboard-info-title">
            <IoLocationOutline />

            <h3>Default Address</h3>
          </div>

          <div className="dashboard-info-content">
            <p><strong>Street: </strong> 4517 Washington Ave.</p>

            <p><strong>State / City: </strong>Kentucky ,Manchester</p>

            <p><strong>zip Code: </strong>39495</p>

            <button type="button">
              Edit Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSection;