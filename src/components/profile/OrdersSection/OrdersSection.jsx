import "./OrdersSection.css";

function OrdersSection() {
  const orders = [
    {
      id: "#10245",
      date: "12 July 2026",
      status: "Delivered",
      total: "$165.00",
    },
    {
      id: "#10244",
      date: "08 July 2026",
      status: "Processing",
      total: "$82.50",
    },
    {
      id: "#10243",
      date: "02 July 2026",
      status: "Pending",
      total: "$49.99",
    },
    {
      id: "#10242",
      date: "28 June 2026",
      status: "Cancelled",
      total: "$120.00",
    },
  ];

  return (
    <section className="orders-section">
      <div className="section-header">
        <h2>My Orders</h2>

      </div>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>

                <td>{order.date}</td>

                <td>
                  <span
                    className={`status-badge ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>{order.total}</td>

                <td>
                  <button
                    type="button"
                    className="view-order-btn"
                  >
                    View Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}

      <div className="orders-mobile">
        {orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
          >
            <div className="order-row">
              <span>Order ID</span>

              <strong>{order.id}</strong>
            </div>

            <div className="order-row">
              <span>Date</span>

              <strong>{order.date}</strong>
            </div>

            <div className="order-row">
              <span>Status</span>

              <span
                className={`status-badge ${order.status.toLowerCase()}`}
              >
                {order.status}
              </span>
            </div>

            <div className="order-row">
              <span>Total</span>

              <strong>{order.total}</strong>
            </div>

            <button
              type="button"
              className="view-order-btn"
            >
              View Order
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrdersSection;