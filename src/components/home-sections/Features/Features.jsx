import "./Features.css";

import {
  FiTruck,
  FiRefreshCcw,
  FiShield,
  FiAward,
} from "react-icons/fi";

const featureData = [
  {
    id: 1,
    icon: <FiTruck />,
    title: "Free Shipping",
    text: "When ordering over $100",
  },
  {
    id: 2,
    icon: <FiRefreshCcw />,
    title: "Free Return",
    text: "Get Return within 30 days",
  },
  {
    id: 3,
    icon: <FiShield />,
    title: "Secure Payment",
    text: "100% Secure Online Payment",
  },
  {
    id: 4,
    icon: <FiAward />,
    title: "Best Quality",
    text: "Original Product Guaranteed",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="container features-wrapper">

        {featureData.map((item) => (
          <div className="feature-card" key={item.id}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <div className="feature-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;