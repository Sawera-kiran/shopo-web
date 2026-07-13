import "./ShowcaseBanner.css";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

function ShowcaseBanner({
  title,
  image,
  bgColor,
  text,
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="showcase-banner" style={{ backgroundColor: bgColor }}>
      <div className="showcase-content">
        <p className="showcase-tag">{text}</p>

        <h3>{title}</h3>

        <ul>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={
                  selectedCategory === category ? "active-category" : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            </li>
          ))}
        </ul>

        <Link to="/shop" className="shop-now-btn">
          Shop Now
          <IoChevronForwardOutline />
        </Link>
      </div>

      <div className="showcase-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default ShowcaseBanner;
