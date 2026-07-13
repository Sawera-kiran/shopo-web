import "./TopSelling.css";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

import { useProducts } from "../../../context/ProductContext";
import TopSellingCard from "./TopSellingCard";

function TopSelling() {
  const { products, loading } = useProducts();

  if (loading) return null;

  // Change these IDs anytime you want different products
  const topSellingIds = [1, 8, 12, 18];

  const topSellingProducts = topSellingIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  return (
    <section className="top-selling section">

      <div className="container">

        <div className="section-header">

          <h2>Top Selling Products</h2>

          <Link to="/shop" className="view-more-btn">
            View More
            <IoArrowForwardOutline />
          </Link>

        </div>

        <div className="top-selling-grid">

          {topSellingProducts.map((product) => (
            <TopSellingCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default TopSelling;