import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../../assets/logo.svg";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import {
  IoSearchOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoPersonOutline,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoCloseOutline,
  IoMenuOutline,
} from "react-icons/io5";

import { FiRefreshCcw } from "react-icons/fi";

import categoryData from "./categoryData";
import { useCart } from "../../context/CartContext/CartContext";

function Header() {
  const { totalItems } = useCart();
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <div className="top-bar">
        <div className="container top-content">
          <div className="top-left">
            <Link to="/">Account</Link>

            <Link to="https://shopo.quomodothemes.website/tracking-order" >
              Track Order
            </Link>

            <Link to="https://shopo.quomodothemes.website/faq" >
              Support
            </Link>
          </div>

          <div className="top-right">
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container header-wrapper">
          {/* Logo */}

          <Link to="/" className="logo">
            <img src={logo} alt="ShopO Logo" />
          </Link>

          {/* Search */}

          <div className="search-box">
            <input type="text" placeholder="Search Product..." />

            <button>
              <IoSearchOutline />
            </button>
          </div>

          {/* Right Icons */}

          <div className="header-icons">
            <Link to="https://shopo.quomodothemes.website/products-compare" className="header-icon">
              <FiRefreshCcw />
            </Link>

            <Link to="https://shopo.quomodothemes.website/wishlist" className="header-icon">
              <IoHeartOutline />
            </Link>

            <Link to="/cart" className="header-icon cart-icon-wrapper">
              <IoBagHandleOutline />

              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>

            <Link to="https://shopo.quomodothemes.website/profile" className="header-icon">
              <IoPersonOutline />
            </Link>
          </div>

          {/* Mobile Menu */}

          <div className="mobile-actions">
            <Link to="/cart" className="mobile-cart">
              <IoBagHandleOutline />

              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav-wrapper">
          {/* Categories */}

          <div className="category-wrapper">
            <button
              className="category-btn"
              onClick={() => setShowCategories(!showCategories)}
            >
              <HiOutlineMenuAlt3 />

              <span>All Categories</span>

              <IoChevronDownOutline />
            </button>

            {showCategories && (
              <div className="category-menu">
                {categoryData.map((item) => (
                  <Link key={item.id} to="#" className="category-item">
                    <div className="category-left">
                      {item.icon}

                      <span>{item.name}</span>
                    </div>

                    <IoChevronForwardOutline />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Menu */}

          <div className="nav-links">
            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>

            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </nav>

      {mobileMenu && (
        <div className="mobile-nav">
          <Link to="/">Home</Link>

          <Link to="/shop">Shop</Link>

          <Link to="/cart">Cart</Link>

          <Link to="https://shopo.quomodothemes.website/profile">Account</Link>

          <Link to="https://shopo.quomodothemes.website/tracking-order">Track Order</Link>

          <Link to="https://shopo.quomodothemes.website/about">Support</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
