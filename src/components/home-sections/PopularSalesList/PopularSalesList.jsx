import "./PopularSalesList.css";

import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

import { useProducts } from "../../../context/ProductContext";

import popularSaleIds from "./popularSaleIds";

function PopularSalesList() {
  const { products, loading } = useProducts();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const getProducts = (ids) =>
    ids
      .map((id) => products.find((product) => product.id === id))
      .filter(Boolean);

  const column1 = getProducts(popularSaleIds.column1);
  const column2 = getProducts(popularSaleIds.column2);
  const column3 = getProducts(popularSaleIds.column3);

  const columns = [column1, column2, column3];

  return (
    <section className="popular-sales-list">

      <div className="container">

        <div className="section-header">

          <h2>Popular Sales</h2>

          <Link
            to="/shop"
            className="view-more-btn"
          >
            View More
            <IoArrowForwardOutline />
          </Link>

        </div>

        <div className="popular-sales-grid">

          {columns.map((column, index) => (

            <div
              className="popular-column"
              key={index}
            >

              {column.map((product) => {

                const oldPrice = (
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2);

                return (

                  <Link
                    to={`/product/${product.id}`}
                    className="popular-item"
                    key={product.id}
                  >

                    <div className="popular-image">

                      <img
                        src={product.thumbnail}
                        alt={product.title}
                      />

                    </div>

                    <div className="popular-info">

                      <h4>{product.title}</h4>

                      <div className="popular-price">

                        <span className="old-price">
                          ${oldPrice}
                        </span>

                        <span className="new-price">
                          ${product.price}
                        </span>

                      </div>

                    </div>

                  </Link>

                );
              })}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularSalesList;