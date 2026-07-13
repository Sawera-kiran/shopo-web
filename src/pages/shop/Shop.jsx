import "./Shop.css";

import { useState, useEffect } from "react";
import { useProducts } from "../../context/ProductContext";

import Sidebar from "../../components/shop/Sidebar/Sidebar";
import ShopToolbar from "../../components/shop/ShopToolbar/ShopToolbar";
import ShopProducts from "../../components/shop/ShopProducts/ShopProducts";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter"
function Shop() {
  const { products, loading } = useProducts();

  const [sortBy, setSortBy] = useState("default");

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedBrand, setSelectedBrand] = useState("all");

  const lowestPrice = Math.floor(
    Math.min(...products.map((product) => product.price)),
  );

  const highestPrice = Math.ceil(
    Math.max(...products.map((product) => product.price)),
  );

  const [priceRange, setPriceRange] = useState([lowestPrice, highestPrice]);

  useEffect(() => {
    if (products.length > 0) {
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
              sortBy={sortBy}
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              priceRange={priceRange}
            />

          </div>
        </div>
        <Newsletter/>
      </div>
    </section>
  );
}

export default Shop;
