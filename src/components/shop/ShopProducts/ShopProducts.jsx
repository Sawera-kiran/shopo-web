import "./ShopProducts.css";
import React from "react";
import ProductCard from "../../product-card/ProductCard";
import ShopBanner from "../ShopBanner/ShopBanner";

function ShopProducts({
  products,
  sortBy,
  selectedCategory,
  selectedBrand,
  priceRange,
}) {
  let filteredProducts = [...products];

  // Category Filter
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }

  // Brand Filter
  if (selectedBrand !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === selectedBrand,
    );
  }

  // Price Range Filter
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1],
  );

  // Sorting
  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Change this number whenever you want the banner elsewhere
  const bannerAfter = 8;

  return (
    <div className="shop-products-grid">
      {filteredProducts.map((product, index) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} />

          {index === bannerAfter - 1 && <ShopBanner />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ShopProducts;
