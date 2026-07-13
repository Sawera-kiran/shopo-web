import "./ProductDetails.css";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../context/ProductContext";

import ProductGallery from "../../components/product-details/ProductGallery/ProductGallery";
import ProductInfo from "../../components/product-details/ProductInfo/ProductInfo";
import ProductTabs from "../../components/product-details/ProductTabs/ProductTabs";
import RelatedProducts from "../../components/product-details/RelatedProducts/RelatedProducts";

function ProductDetails() {
  const { id } = useParams();

  const { products, loading } = useProducts();

  // ✅ Hooks must always be called before any return
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <section className="product-details-page">
      <div className="container">

        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Shop</span>
          <span>/</span>
          <span>{product.title}</span>
        </div>

        <div className="product-details-layout">

          <div>

            <ProductGallery
              product={product}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />

          </div>

          <ProductInfo
            product={product}
            selectedImageIndex={selectedImageIndex}
            setSelectedImageIndex={setSelectedImageIndex}
          />

        </div>

        <ProductTabs product={product} />

        <RelatedProducts
          currentProduct={product}
          products={products}
        />

      </div>
    </section>
  );
}

export default ProductDetails;