import "./NewArrivals.css";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

import { useProducts } from "../../../context/ProductContext";
import ProductCard from "../../product-card/ProductCard";

import newArrivalIds from "./newArrivalIds";

function NewArrivals() {
  const { products, loading } = useProducts();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const newArrivalProducts = newArrivalIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  return (
    <section className="new-arrivals">

      <div className="container">

        <div className="section-header">

          <h2>New Arrivals</h2>

          <Link
            to="/shop"
            className="view-more-btn"
          >
            View More
            <IoArrowForwardOutline />
          </Link>

        </div>

        <div className="new-arrivals-grid">

          {newArrivalProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default NewArrivals;