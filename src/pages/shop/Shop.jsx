// src/pages/shop/Shop.jsx

import "./Shop.css";

import { useState, useEffect } from "react";

import { useProducts } from "../../context/ProductContext";
import { useSearch } from "../../context/SearchContext/SearchContext";

import Sidebar from "../../components/shop/Sidebar/Sidebar";
import ShopToolbar from "../../components/shop/ShopToolbar/ShopToolbar";
import ShopProducts from "../../components/shop/ShopProducts/ShopProducts";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";

function Shop() {
  const { products, loading } = useProducts();

  const { searchTerm } = useSearch();

  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const lowestPrice =
    products.length > 0
      ? Math.floor(Math.min(...products.map((product) => product.price)))
      : 0;

  const highestPrice =
    products.length > 0
      ? Math.ceil(Math.max(...products.map((product) => product.price)))
      : 0;

  const [priceRange, setPriceRange] = useState([lowestPrice, highestPrice]);

  useEffect(() => {
    if (products.length) {
      setPriceRange([lowestPrice, highestPrice]);
    }
  }, [products, lowestPrice, highestPrice]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="shop-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Shop</span>
        </div>

        <div className="shop-layout">
          <Sidebar
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            lowestPrice={lowestPrice}
            highestPrice={highestPrice}
          />

          <div className="shop-content">
            <ShopToolbar
              totalProducts={products.length}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            <ShopProducts
              products={products}
              searchTerm={searchTerm}
              sortBy={sortBy}
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              priceRange={priceRange}
            />
          </div>
        </div>

      </div>
        <Newsletter />
    </section>
  );
}

export default Shop;
