import "./Hero.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../../context/ProductContext";
import { IoChevronForwardOutline } from "react-icons/io5";

function Hero() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section className="hero">
        <div className="container">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="hero">
        <div className="container">
          <h2>{error}</h2>
        </div>
      </section>
    );
  }

  if (products.length < 3) {
    return null;
  }

  const mainProduct = products[0];
  const sideTopProduct = products[1];
  const sideBottomProduct = products[2];

  return (
    <section className="hero">
      <div className="container hero-wrapper">
        {/* Main Banner */}
        <div className="hero-main">
          <div className="hero-content">
            <span className="hero-tag">{mainProduct.category}</span>
            <h1>{mainProduct.title}</h1>
            <Link to={`/product/${mainProduct.id}`} className="hero-btn">
              Shop Now
              <IoChevronForwardOutline />
            </Link>
          </div>

          <div className="hero-image">
            <img src={mainProduct.thumbnail} alt={mainProduct.title} />
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-content ">
              <span className="hero-tag">{mainProduct.category}</span>

              <h3>{sideTopProduct.title}</h3>

              <Link to={`/product/${sideTopProduct.id}`} className="hero-btn">
                Shop Now
                <IoChevronForwardOutline />
              </Link>
            </div>

            <img src={sideTopProduct.thumbnail} alt={sideTopProduct.title} />
          </div>

          <div className="hero-card">
            <div className="hero-card-content">
              <span className="hero-tag"> {mainProduct.category}</span>

              <h3>{sideBottomProduct.title}</h3>

              <Link to={`/product/${sideBottomProduct.id}`} className="hero-btn">
                Shop Now
                <IoChevronForwardOutline />
              </Link>
            </div>

            <img
              src={sideBottomProduct.thumbnail}
              alt={sideBottomProduct.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
