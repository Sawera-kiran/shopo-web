import "./Newsletter.css";

import newsletterBanner from "../../../assets/banners/newsletter-banner.png";

import { IoMailOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Newsletter() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/newsletter");
  }

  return (
    <section className="newsletter">

      <div className="container">

        <div
          className="newsletter-wrapper"
          style={{
            backgroundImage: `url(${newsletterBanner})`,
          }}
        >

          <div className="newsletter-content">

            <h2>
              Get <span>20%</span> Off Discount Coupon
            </h2>

            <p>
              by Subscribe our Newsletter
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >

              <div className="newsletter-input">

                <IoMailOutline />

                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  required
                />

              </div>

              <button>
                Get the Coupon
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;