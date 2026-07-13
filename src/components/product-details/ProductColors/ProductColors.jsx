import "./ProductColors.css";

const colors = [
  "#ff9f43",
  "#2e86de",
  "#ffffff",
  "#ff4757",
  "#2f3542",
  "#8e44ad",
  "#16a085",
];

function ProductColors({
  product,
  selectedImageIndex,
  setSelectedImageIndex,
}) {
  return (
    <div className="product-details-colors">

      <h4>Color</h4>

      <div className="product-details-color-list">

        {product.images.map((_, index) => (

          <button
            key={index}
            className={`product-details-color ${
              selectedImageIndex === index
                ? "product-details-color-active"
                : ""
            }`}
            style={{
              background: colors[index % colors.length],
            }}
            onClick={() => setSelectedImageIndex(index)}
          />

        ))}

      </div>

    </div>
  );
}

export default ProductColors;