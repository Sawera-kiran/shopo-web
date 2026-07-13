import "./SidebarBanner.css";

import { Link } from "react-router-dom";

import sidebarBanner from "../../../assets/banners/sidebar-banner.png";

function SidebarBanner() {
  return (
    <div className="sidebar-banner">

      <Link to="/shop">

        <img
          src={sidebarBanner}
          alt="Special Offer"
        />

      </Link>

    </div>
  );
}

export default SidebarBanner;