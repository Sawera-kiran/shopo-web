import "./Sidebar.css";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import SidebarBanner from "../SidebarBanner/SidebarBanner";

function Sidebar({
  products,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  lowestPrice,
  highestPrice,
}) {
  // Categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Products according to selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Brands according to selected category
  const brands = [
    "all",
    ...new Set(
      filteredProducts.map((product) => product.brand).filter(Boolean),
    ),
  ];

  return (
    <aside className="sidebar">
      {/* Categories */}

      <div className="sidebar-widget">
        <h3>Categories</h3>

        <ul>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={
                  selectedCategory === category ? "active-category" : ""
                }
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedBrand("all");
                }}
              >
                {category
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}

      <div className="sidebar-widget">
        <h3>Price Range</h3>

        <Slider
          range
          min={lowestPrice}
          max={highestPrice}
          value={priceRange}
          onChange={setPriceRange}
        />

        <p className="price-text">
          Price: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
        </p>
      </div>

      {/* Brands */}

      <div className="sidebar-widget">
        <h3>Brands</h3>

        <ul>
          {brands.map((brand, index) => (
            <li key={`${brand}-${index}`}>
              <button
                className={selectedBrand === brand ? "active-category" : ""}
                onClick={() => setSelectedBrand(brand)}
              >
                {brand
                  ? brand.replace(/\b\w/g, (char) => char.toUpperCase())
                  : "Unknown"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <SidebarBanner />
    </aside>
  );
}

export default Sidebar;
