// import "./TopSellingCard.css";
// import { Link } from "react-router-dom";

// import {
//   IoExpandOutline,
//   IoHeartOutline,
//   IoRefreshOutline,
//   IoBagHandleOutline,
// } from "react-icons/io5";

// function TopSellingCard({ product }) {
//   return (
//     <div className="top-selling-card">

//       {/* Image */}

//       <div className="top-selling-image">

//         <img
//           src={product.thumbnail}
//           alt={product.title}
//         />

//         <div className="top-selling-icons">

//           <button>
//             <IoExpandOutline />
//           </button>

//           <button>
//             <IoHeartOutline />
//           </button>

//           <button>
//             <IoRefreshOutline />
//           </button>

//         </div>

//       </div>

//       {/* Content */}

//       <div className="top-selling-content">

//         <div className="stars">

//           ★★★★★

//         </div>

//         <Link
//           to={`/product/${product.id}`}
//           className="product-title"
//         >
//           {product.title}
//         </Link>

//         <div className="price">

//           <span className="old-price">
//             $
//             {(product.price * 1.3).toFixed(2)}
//           </span>

//           <span className="new-price">
//             ${product.price}
//           </span>

//         </div>

//         <button className="cart-btn">

//           <IoBagHandleOutline />

//           Add To Cart

//         </button>

//       </div>

//     </div>
//   );
// }

// export default TopSellingCard;


import "./TopSellingCard.css";
import { Link } from "react-router-dom";
import {
  IoExpandOutline,
  IoHeartOutline,
  IoRefreshOutline,
  IoBagHandleOutline,
  IoStar,
  IoStarHalf,
  IoStarOutline,
} from "react-icons/io5";

function TopSellingCard({ product }) {
  const rating = Math.round(product.rating);

  return (
    <div className="top-selling-card">

      {/* Product Image */}

      <div className="top-selling-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      {/* Product Content */}

      <div className="top-selling-content">

        {/* Action Icons */}

        <div className="top-selling-icons">

          <button>
            <IoExpandOutline />
          </button>

          <button>
            <IoHeartOutline />
          </button>

          <button>
            <IoRefreshOutline />
          </button>

        </div>

        {/* Rating */}

        <div className="stars">

          {[1, 2, 3, 4, 5].map((star) => {
            if (rating >= star) {
              return <IoStar key={star} />;
            } else if (rating >= star - 0.5) {
              return <IoStarHalf key={star} />;
            } else {
              return <IoStarOutline key={star} />;
            }
          })}

        </div>

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <div className="price">

          <span className="old-price">
            ${(product.price * 1.3).toFixed(2)}
          </span>

          <span className="new-price">
            ${product.price}
          </span>

        </div>

      </div>

    </div>
  );
}

export default TopSellingCard;