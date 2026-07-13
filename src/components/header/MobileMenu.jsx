import "./MobileMenu.css";

import { Link } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi";
import {
  IoBagHandleOutline,
  IoCloseOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";

import SearchBar from "./SearchBar";

function MobileMenu({ isOpen, onClose, totalItems = 0 }) {
  return (
    <div
      aria-hidden={!isOpen}
      className={`mobile-menu${isOpen ? " active" : ""}`}
      id="mobile-menu"
    >
      <button
        aria-label="Close menu"
        className="mobile-menu-overlay"
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <aside aria-label="Mobile navigation" className="mobile-menu-content">
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            aria-label="Close menu"
            className="mobile-menu-close"
            onClick={onClose}
            type="button"
          >
            <IoCloseOutline />
          </button>
        </div>

        <div className="mobile-menu-search">
          <SearchBar />
        </div>

        <nav className="mobile-menu-nav">
          <Link className="mobile-menu-link" onClick={onClose} to="/">
            Home
          </Link>
          <Link className="mobile-menu-link" onClick={onClose} to="/shop">
            Shop
          </Link>
          <Link
            className="mobile-menu-link"
            onClick={onClose}
            to="/collections"
          >
            Collections
          </Link>
          <Link className="mobile-menu-link" onClick={onClose} to="/wishlist">
            <IoHeartOutline />
            Wishlist
          </Link>
          <a
            className="mobile-menu-link"
            href="https://shopo.quomodothemes.website/profile"
          >
            <IoPersonOutline />
            Account
          </a>
          <a
            className="mobile-menu-link"
            href="https://shopo.quomodothemes.website/products-compare"
          >
            <FiRefreshCcw />
            Compare
          </a>
          <a
            className="mobile-menu-link"
            href="https://shopo.quomodothemes.website/tracking-order"
          >
            Track Order
          </a>
          <a
            className="mobile-menu-link"
            href="https://shopo.quomodothemes.website/faq"
          >
            Support
          </a>
        </nav>

        <div className="mobile-menu-footer">
          <Link className="mobile-cart-button" onClick={onClose} to="/cart">
            <IoBagHandleOutline />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="mobile-cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;
