import "./ReviewsSection.css";

import { IoStar, IoTrashOutline, IoCreateOutline } from "react-icons/io5";

function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      product: "Wireless Gaming Headset",
      image: "https://dummyimage.com/100x100/f2f2f2/555555&text=Product",
      rating: 5,
      date: "12 July 2026",
      review:
        "Excellent sound quality and very comfortable to wear. The battery life is amazing and the microphone is crystal clear.",
    },
    {
      id: 2,
      product: "Mechanical Keyboard",
      image: "https://dummyimage.com/100x100/f2f2f2/555555&text=Product",
      rating: 4,
      date: "03 July 2026",
      review:
        "Very satisfying typing experience. The RGB lighting looks great and the build quality feels premium.",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="section-header">
        <h2>My Reviews</h2>
      </div>

      {reviews.length === 0 ? (
        <div className="empty-reviews">
          <h3>No Reviews Yet</h3>

          <p>You haven't reviewed any products yet.</p>
        </div>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <article className="review-cards" key={review.id}>
              <div className="review-image">
                <img src={review.image} alt={review.product} />
              </div>

              <div className="review-content">
                <h3>{review.product}</h3>

                <div className="review-rating">
                  {[...Array(review.rating)].map((_, index) => (
                    <IoStar key={index} />
                  ))}
                </div>

                <p className="review-date">{review.date}</p>

                <p className="review-text">{review.review}</p>

                <div className="review-actions">
                  <button type="button" className="edit-btn">
                    <IoCreateOutline />
                    Edit
                  </button>

                  <button type="button" className="delete-btn">
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ReviewsSection;
