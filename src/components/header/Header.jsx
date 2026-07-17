import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  IoBagHandleOutline,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";

import "./Header.css";
import logo from "../../assets/logo.svg";
import { useCart } from "../../context/CartContext/CartContext";
import categoryData from "./categoryData";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";

function Header() {
  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeCategories() {
    setShowCategories(false);
  }

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-content">
          <div className="top-left">
            <Link to="/">Account</Link>
            <a href="https://shopo.quomodothemes.website/tracking-order">
              Track Order
            </a>
            <a href="https://shopo.quomodothemes.website/faq">Support</a>
          </div>

          <div className="top-right" aria-label="Social media">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container header-wrapper">
          <Link className="logo" to="/" aria-label="ShopO home">
            <img src={logo} alt="ShopO" />
          </Link>

          <SearchBar />

          <div className="header-icons" aria-label="Customer actions">
            <Link
              className="header-icon wishlist-icon-wrapper"
              to="/wishlist"
              aria-label="Wishlist"
            >
              <IoHeartOutline />

              {wishlistCount > 0 && (
                <span className="wishlist-badge">{wishlistCount}</span>
              )}
            </Link>
            <Link
              className="header-icon cart-icon-wrapper"
              to="/cart"
              aria-label="Cart"
            >
              <IoBagHandleOutline />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
            <Link
              className="header-icon"
              to="/profile"
              aria-label="Account profile"
            >
              <IoPersonOutline />
            </Link>
          </div>

          <div className="mobile-actions">
            <Link className="mobile-cart" to="/cart" aria-label="Cart">
              <IoBagHandleOutline />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
            <button
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Open menu"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar" aria-label="Primary navigation">
        <div className="container nav-wrapper">
          <div className="category-wrapper">
            <button
              aria-expanded={showCategories}
              className="category-btn"
              onClick={() => setShowCategories((isOpen) => !isOpen)}
              type="button"
            >
              <HiOutlineMenuAlt3 />
              <span>All Categories</span>
              <IoChevronDownOutline />
            </button>

            {showCategories && (
              <div className="category-menu">
                {categoryData.map((item) => (
                  <Link
                    className="category-item"
                    key={item.id}
                    onClick={closeCategories}
                    to="/shop"
                  >
                    <span className="category-left">
                      {item.icon}
                      <span>{item.name}</span>
                    </span>
                    <IoChevronForwardOutline />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        totalItems={totalItems}
      />
    </header>
  );
}

export default Header;
