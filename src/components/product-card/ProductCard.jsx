import "./ProductCard.css";

import { Link } from "react-router-dom";

import {
  IoExpandOutline,
  IoRefreshOutline,
  IoStar,
} from "react-icons/io5";

import AnimatedAddToCartButton from "../comon/AnimatedAddToCartButton/AnimatedAddToCartButton";
import WishlistButton from "../comon/WishlistButton/WishlistButton";

function ProductCard({ product }) {
  const {
    id,
    title,
    thumbnail,
    price,
    discountPercentage,
    rating,
  } = product;

  const originalPrice = (
    price /
    (1 - discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <Link to={`/product/${id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="product-image"
          />
        </Link>

        <span className="discount-badge">
          -{Math.round(discountPercentage)}%
        </span>

        <div className="product-actions">
          <button type="button">
            <IoExpandOutline />
          </button>

          <WishlistButton
            product={product}
            variant="card"
          />

          <button type="button">
            <IoRefreshOutline />
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <IoStar
              key={index}
              className={
                index < Math.round(rating)
                  ? "star active"
                  : "star"
              }
            />
          ))}
        </div>

        <Link
          to={`/product/${id}`}
          className="product-title"
        >
          {title}
        </Link>

        <div className="product-price">
          <span className="old-price">
            ${originalPrice}
          </span>

          <span className="new-price">
            ${price}
          </span>
        </div>
      </div>

      <div className="cart-wrapper">
        <AnimatedAddToCartButton
          product={product}
          variant="card"
        />
      </div>
    </div>
  );
}

export default ProductCard;