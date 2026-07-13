import "./OfferBanner.css";

import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

import offerBanner from "../../../assets/banners/offer-banner.png";

function OfferBanner() {
  return (
    <section className="offer-banner">

      <div className="container">

        <Link
          to="/shop"
          className="offer-banner-link"
        >

          <img
            src={offerBanner}
            alt="Offer Banner"
          />

        </Link>

      </div>

    </section>
  );
}

export default OfferBanner;