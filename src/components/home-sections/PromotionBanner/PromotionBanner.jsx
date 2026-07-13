import "./PromotionBanner.css";
import promotionData from "./promotionData";

import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

function PromotionBanner() {
  return (
    <section className="promotion-banner">
      <div className="container">
        <div className="promotion-grid">
          {promotionData.map((item) => (
            <div
              className="promotion-card"
              key={item.id}
              style={{ background: item.bgColor }}
            >
              <div className="promotion-content">
                <span>{item.tag}</span>

                <h2>{item.title}</h2>

                <Link to="/shop">
                  <button className="shop-btn">
                    Shop Now
                    <IoChevronForwardOutline />
                  </button>
                </Link>
              </div>

              <div className="promotion-image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromotionBanner;
