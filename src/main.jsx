import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext/CartContext";
import { SearchProvider } from "./context/SearchContext/SearchContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistProvider } from "./context/WishlistContext/WishlistContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <SearchProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </SearchProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
  <ToastContainer position="top-right" autoClose={2000} />,
);
