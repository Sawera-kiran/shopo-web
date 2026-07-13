import "./FlashSale.css";

import { IoChevronForwardOutline } from "react-icons/io5";

import offerBanner from "../../../assets/banners/flash-sale.png";
import phoneMockup from "../../../assets/app/phone-mockup.png";
import googlePlay from "../../../assets/app/google-play.png";
import appStore from "../../../assets/app/app-store.png";
import { Link } from "react-router-dom";

function FlashSale() {
  return (
    <section className="flash-sale">
      <div className="container">
        <div className="flash-wrapper">
          {/* LEFT */}

          <div
            className="flash-left"
            style={{
              backgroundImage: `url(${offerBanner})`,
            }}
          >
            <div className="flash-overlay">
              <div className="countdown">
                <div className="time-box">
                  <span>0</span>
                  <p>Days</p>
                </div>

                <div className="time-box">
                  <span>0</span>
                  <p>Hours</p>
                </div>

                <div className="time-box">
                  <span>0</span>
                  <p>Minutes</p>
                </div>

                <div className="time-box">
                  <span>0</span>
                  <p>Seconds</p>
                </div>
              </div>

              <div className="flash-text">
                <h2>
                  WOO!
                  <br />
                  Flash Sale
                </h2>
                <Link to="/shop">
                  <button className="shop-btn">
                    Shop Now
                    <IoChevronForwardOutline />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flash-right">
            <div className="app-content">
              <span className="app-label">MOBILE APP VERSION</span>

              <h2>
                Get Our
                <span> Mobile App </span>
                It Makes your life easy!
              </h2>

              <div className="store-buttons">
                <img src={googlePlay} alt="Google Play" />

                <img src={appStore} alt="App Store" />
              </div>
            </div>

            <div className="phone-wrapper">
              <img src={phoneMockup} alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlashSale;
