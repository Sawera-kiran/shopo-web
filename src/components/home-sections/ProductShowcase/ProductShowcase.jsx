import "./ProductShowcase.css";
import { useState } from "react";
import ShowcaseBanner from "../ShowcaseBanner/ShowcaseBanner";
import ProductCard from "../../product-card/ProductCard";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProductShowcase({
  title,
  products,
  bannerImage,
  bannerColor,
  bannerTitle,
  bannerText,
}) {
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].slice(0, 4);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );

  const bannerProduct =
    products.find((product) => product.category === selectedCategory) ||
    products[0];
  return (
    <section className="product-showcase">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>

          <Link to="/shop" className="view-more-btn">
            View More
            <IoArrowForwardOutline />
          </Link>
        </div>

        <div className="showcase-wrapper">
          <ShowcaseBanner
            title={bannerTitle}
            image={bannerProduct.thumbnail}
            bgColor={bannerColor}
            text={bannerText}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="showcase-products">
            {filteredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
