import "./ShopToolbar.css";

function ShopToolbar({
  totalProducts,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="shop-toolbar">

      <p>

        Showing

        <strong>

          {" "}
          {totalProducts}
          {" "}

        </strong>

        Products

      </p>

      <div className="sort-wrapper">

        <label>

          Sort by Price:

        </label>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >

          <option value="default">

            Default

          </option>

          <option value="low">

            Low to High

          </option>

          <option value="high">

            High to Low

          </option>

        </select>

      </div>

    </div>
  );
}

export default ShopToolbar;