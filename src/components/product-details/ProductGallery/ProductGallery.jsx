import "./ProductGallery.css";

function ProductGallery({
  product,
  selectedImageIndex,
  setSelectedImageIndex,
}) {
  return (
    <div className="product-details-gallery">

      {product.discountPercentage > 0 && (
        <div className="product-details-discount-badge">
          -{Math.round(product.discountPercentage)}%
        </div>
      )}

      <div className="product-details-main-image">

        <img
          src={product.images[selectedImageIndex]}
          alt={product.title}
        />

      </div>

      <div className="product-details-thumbnails">

        {product.images.map((image, index) => (
          <button
            key={index}
            className={`product-details-thumbnail ${
              selectedImageIndex === index
                ? "product-details-thumbnail-active"
                : ""
            }`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image}
              alt={`${product.title} ${index + 1}`}
            />
          </button>
        ))}

      </div>

    </div>
  );
}

export default ProductGallery;