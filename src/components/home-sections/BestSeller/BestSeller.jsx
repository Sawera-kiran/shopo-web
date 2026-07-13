import "./BestSeller.css";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

import sellers from "./sellersData";

function BestSeller() {
  return (
    <section className="best-seller">

      <div className="container">

        <div className="section-header">

          <h2>Best Seller</h2>

          <Link
            to="/shop"
            className="view-more-btn"
          >
            View More

            <IoArrowForwardOutline />
          </Link>

        </div>

        <div className="seller-grid">

          {sellers.map((seller) => (

            <div
              className="seller-card"
              key={seller.id}
            >

              <div className="seller-image">

                <img
                  src={seller.image}
                  alt={seller.name}
                />

              </div>

              <h4>{seller.name}</h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BestSeller;