import "./Home.css";
import { useProducts } from "../../context/ProductContext";

import Hero from "../../components/home-sections/Hero/Hero";
import Features from "../../components/home-sections/Features/Features";
import ProductShowcase from "../../components/home-sections/ProductShowcase/ProductShowcase";
import FlashSale from "../../components/home-sections/FlashSale/FlashSale";
import BrandSection from "../../components/home-sections/BrandSection/BrandSection";
import TopSelling from "../../components/home-sections/TopSelling/TopSelling";
import BestSeller from "../../components/home-sections/BestSeller/BestSeller";
import PromotionBanner from "../../components/home-sections/PromotionBanner/PromotionBanner";
import Newsletter from "../../components/home-sections/Newsletter/Newsletter";
import newArrivalIds from "../../components/home-sections/NewArrivals/newArrivalIds";
import NewArrivals from "../../components/home-sections/NewArrivals/NewArrivals";
import OfferBanner from "../../components/home-sections/OfferBanner/OfferBanner";
import PopularSalesList from "../../components/home-sections/PopularSalesList/PopularSalesList";
function Home() {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase
        title="Shop by Category"
        products={products}
        bannerTitle="Products"
        bannerText="Category"
        bannerColor="#cfe8fb"
      />
      <BrandSection />
      <FlashSale />
      <TopSelling />
      <BestSeller />
      <PromotionBanner />
      <NewArrivals/>
      <OfferBanner/> 
      <PopularSalesList/>
      <Newsletter/>
    </>
  );
}

export default Home;
