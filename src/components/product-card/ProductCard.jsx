import "./ProductCard.css";
import { Link } from "react-router-dom";
import {
  IoExpandOutline,
  IoHeartOutline,
  IoRefreshOutline,
  IoBagHandleOutline,
  IoStar,
} from "react-icons/io5";
import { useCart } from "../../context/CartContext/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const { id, title, thumbnail, price, discountPercentage, rating, category } =
    product;

  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <Link to={`/product/${id}`}>
          <img src={thumbnail} alt={title} className="product-image" />
        </Link>

        <span className="discount-badge">
          -{Math.round(discountPercentage)}%
        </span>

        <div className="product-actions">
          <button>
            <IoExpandOutline />
          </button>

          <button>
            <IoHeartOutline />
          </button>

          <button>
            <IoRefreshOutline />
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <IoStar
              key={index}
              className={index < Math.round(rating) ? "star active" : "star"}
            />
          ))}
        </div>

        <Link to={`/product/${id}`} className="product-title">
          {title}
        </Link>

        <div className="product-price">
          <span className="old-price">${originalPrice}</span>

          <span className="new-price">${price}</span>
        </div>
      </div>

      <div className="cart-wrapper">
        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          <IoBagHandleOutline />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
