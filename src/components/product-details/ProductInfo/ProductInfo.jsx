import "./ProductInfo.css";

import { useState } from "react";

import {
  FaStar,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import ProductColors from "../ProductColors/ProductColors";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

import WishlistButton from "../../comon/WishlistButton/WishlistButton";
import AnimatedAddToCartButton from "../../comon/AnimatedAddToCartButton/AnimatedAddToCartButton";

function ProductInfo({
  product,
  selectedImageIndex,
  setSelectedImageIndex,
}) {
  const [quantity, setQuantity] = useState(1);

  const oldPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="product-details-info">
      <p className="product-details-category">
        {product.category.replace(/-/g, " ")}
      </p>

      <h1 className="product-details-title">
        {product.title}
      </h1>

      <div className="product-details-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < Math.round(product.rating)
                ? "filled-star"
                : "empty-star"
            }
          />
        ))}

        <span className="rating-value">
          {product.rating}
        </span>

        <span className="review-count">
          ({product.reviews?.length || 0} Reviews)
        </span>
      </div>

      <div className="product-details-price">
        <span className="current-price">
          ${product.price}
        </span>

        <span className="old-price">
          ${oldPrice}
        </span>

        <span className="discount-percent">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      <div className="availability-row">
        <span className="availability-label">
          Availability :
        </span>

        <span
          className={
            product.stock > 0
              ? "in-stock"
              : "out-stock"
          }
        >
          {product.stock > 0
            ? "In Stock"
            : "Out of Stock"}
        </span>
      </div>

      <p className="product-details-description">
        {product.description}
      </p>

      <ProductColors
        product={product}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />

      <div className="product-details-cart-row">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() =>
            setQuantity((prev) => prev + 1)
          }
          onDecrease={() =>
            setQuantity((prev) =>
              Math.max(1, prev - 1)
            )
          }
          showLabel={true}
          variant="default"
        />

        <WishlistButton
          product={product}
          variant="details"
        />

        <AnimatedAddToCartButton
          product={product}
          quantity={quantity}
          variant="details"
          fullWidth
        />
      </div>

      <div className="product-details-meta">
        <p>
          <strong>Category :</strong>{" "}
          {product.category}
        </p>

        <p>
          <strong>Tags :</strong>{" "}
          {product.tags?.join(", ")}
        </p>

        <p>
          <strong>SKU :</strong>{" "}
          {product.sku}
        </p>

        <p>
          <strong>Brand :</strong>{" "}
          {product.brand}
        </p>

        <p>
          <strong>Warranty :</strong>{" "}
          {product.warrantyInformation}
        </p>

        <p>
          <strong>Shipping :</strong>{" "}
          {product.shippingInformation}
        </p>

        <p>
          <strong>Return :</strong>{" "}
          {product.returnPolicy}
        </p>
      </div>

      <div className="product-details-share">
        <span>Share This</span>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="share-facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="share-pinterest"
        >
          <FaPinterestP />
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="share-twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default ProductInfo;