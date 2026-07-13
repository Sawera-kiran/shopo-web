import "./RelatedProducts.css";

import ProductCard from "../../../components/product-card/ProductCard";

function RelatedProducts({
  currentProduct,
  products,
}) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id
    )
    .slice(0, 4);

  return (
    <section className="related-products">

      <h2 className="related-products-title">

        Related Products

      </h2>

      <div className="related-products-grid">

        {relatedProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;