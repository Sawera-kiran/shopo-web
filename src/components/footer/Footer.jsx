import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/logo.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import paypal from "../../assets/paypal.svg";
import skrill from "../../assets/skrill.svg";
import maestro from "../../assets/maestro.svg";
import visaElectron from "../../assets/visa-electron.svg";

function Footer ()  {
  return (
    <footer className="footer">

      {/* Top Logo */}

      <div className="footer-logo">
        <img src={logo} alt="ShopO Logo" />
      </div>

      <div className="footer-line"></div>

      {/* Main Footer */}

      <div className="footer-container">

        {/* About */}

        <div className="footer-column about">

          <h3>About Us</h3>

          <p>
            We know there are a lot of great developers out there,
            but we pride ourselves on being one of the best in
            the industry.
          </p>

        </div>

        {/* Feature */}

        <div className="footer-column">

          <h3>Feature</h3>

          <Link to="https://shopo.quomodothemes.website/about">About Us</Link>

          <Link to="https://shopo.quomodothemes.website/terms-condition">Terms Condition</Link>

          <Link to="/shop">Best Products</Link>

        </div>

        {/* General */}

        <div className="footer-column">

          <h3>General Links</h3>

          <Link to="https://shopo.quomodothemes.website/blogs">Blog</Link>

          <Link to="https://shopo.quomodothemes.website/tracking-order">Tracking Order</Link>

          <Link to="https://shopo.quomodothemes.website/become-saller">Become Seller</Link>

        </div>

        {/* Helpful */}

        <div className="footer-column">

          <h3>Helpful</h3>

          <Link to="https://shopo.quomodothemes.website/flash-sale">Flash Sale</Link>

          <Link to="https://shopo.quomodothemes.website/faq">FAQ</Link>

          <Link to="https://shopo.quomodothemes.website/about">Support</Link>

        </div>

      </div>

      <div className="footer-line"></div>

      {/* Bottom */}

      <div className="footer-bottom">

        <div className="footer-left">

          <div className="social-icons">

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

          <p>

            ©2022 <span>Quomodosoft</span> All rights reserved

          </p>

        </div>

        <div className="payment-icons">

          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={paypal} alt="Paypal" />
          <img src={skrill} alt="Skrill" />
          <img src={maestro} alt="Maestro" />
          <img src={visaElectron} alt="Visa Electron" />

        </div>

      </div>

    </footer>
  );
};

export default Footer;