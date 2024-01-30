import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./components/ProductsContext";
import { ExchangeRateProvider } from "./components/ExchangeRateContext";
import { CartProvider } from "./components/CartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PostProvider } from "./components/PostContext";
import { ProductVariationProvider } from "./components/ProductVariationContext";
import TagManager from "react-gtm-module";
import "./index.css";

const tagManagerArgs = {
  gtmId: "GTM-K4QBF39",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductVariationProvider>
    <PostProvider>
      <CartProvider>
        <ExchangeRateProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </ExchangeRateProvider>
      </CartProvider>
    </PostProvider>
  </ProductVariationProvider>
);
