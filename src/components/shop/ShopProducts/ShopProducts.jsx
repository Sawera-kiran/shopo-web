import "./ShopProducts.css";

import { Fragment, useMemo } from "react";

import { useSearch } from "../../../context/SearchContext/SearchContext";
import searchProducts from "../../../utils/searchProducts";
import ProductCard from "../../product-card/ProductCard";
import ShopBanner from "../ShopBanner/ShopBanner";

function ShopProducts({
  products,
  sortBy,
  selectedCategory,
  selectedBrand,
  priceRange,
}) {
  const { searchTerm } = useSearch();

  const filteredProducts = useMemo(() => {
    let result = searchTerm.trim()
      ? searchProducts(products, searchTerm)
      : [...products];

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (selectedBrand !== "all") {
      result = result.filter(
        (product) => product.brand === selectedBrand,
      );
    }

    result = result.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1],
    );

    if (sortBy === "low") {
      result.sort((first, second) => first.price - second.price);
    }

    if (sortBy === "high") {
      result.sort((first, second) => second.price - first.price);
    }

    return result;
  }, [
    products,
    searchTerm,
    selectedCategory,
    selectedBrand,
    priceRange,
    sortBy,
  ]);

  if (!filteredProducts.length) {
    return (
      <div className="shop-empty-state">
        <h2>No products found</h2>
        <p>Try a different search term or change the filters.</p>
      </div>
    );
  }

  return (
    <div className="shop-products-grid">
      {filteredProducts.map((product, index) => (
        <Fragment key={product.id}>
          <ProductCard product={product} />

          {index === 7 && <ShopBanner />}
        </Fragment>
      ))}
    </div>
  );
}

export default ShopProducts;