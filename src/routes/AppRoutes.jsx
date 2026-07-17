import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import ProductDetails from "../pages/productdetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import Checkout from "../pages/checkout/Checkout";
import ScrollToTop from "../components/comon/ScrollToTop/ScrollToTop";
import Profile from "../pages/profile/Profile";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import Faq from "../pages/Faq/Faq";
function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/trackorder" element={<TrackOrder />} />

          <Route path="/faq" element={<Faq/>} />

        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
