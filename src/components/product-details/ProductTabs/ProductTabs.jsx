import "./ProductTabs.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="product-tabs">
      <div className="product-tabs-header">
        <button
          className={activeTab === "description" ? "active-tab" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "reviews" ? "active-tab" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({product.reviews?.length || 0})
        </button>
      </div>

      <div className="product-tabs-content">
        {activeTab === "description" && (
          <div className="description-tab">
            <h3>Product Description</h3>

            <p className="description-text">{product.description}</p>

            <div className="description-features">
              <h4>Product Highlights</h4>

              <ul>
                <li>
                  <strong>Brand:</strong> {product.brand}
                </li>

                <li>
                  <strong>Category:</strong> {product.category}
                </li>

                <li>
                  <strong>Availability:</strong>{" "}
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </li>

                <li>
                  <strong>Warranty:</strong> {product.warrantyInformation}
                </li>

                <li>
                  <strong>Shipping:</strong> {product.shippingInformation}
                </li>

                <li>
                  <strong>Return Policy:</strong> {product.returnPolicy}
                </li>

                <li>
                  <strong>Minimum Order:</strong> {product.minimumOrderQuantity}
                </li>
              </ul>
            </div>

            <div className="description-tags">
              <h4>Product Tags</h4>

              <div className="tag-list">
                {product.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="reviews-tab">
            <h3>Customer Reviews</h3>

            <div className="reviews-list">
              {product.reviews?.map((review, index) => (
                <div className="review-card" key={index}>
                  <div className="review-header">
                    <div className="review-avatar">
                      {review.reviewerName.charAt(0)}
                    </div>

                    <div>
                      <h4>{review.reviewerName}</h4>

                      <p>{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="review-stars">
                    {[...Array(5)].map((_, star) => (
                      <FaStar
                        key={star}
                        className={
                          star < review.rating ? "filled-star" : "empty-star"
                        }
                      />
                    ))}
                  </div>

                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductTabs;
