import "./ShopBanner.css";

import { Link } from "react-router-dom";

import shopBanner from "../../../assets/banners/shop-banner.png";

function ShopBanner() {
  return (
    <div className="shop-banner">

      <Link to="/shop">

        <img
          src={shopBanner}
          alt="Special Offer"
        />

      </Link>

    </div>
  );
}

export default ShopBanner;