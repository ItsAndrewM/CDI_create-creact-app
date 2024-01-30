require("dotenv").config({
  path: "../.env",
});

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "https://cdifurlers.elementor.cloud/", // Your store URL
  consumerKey: process.env.WOOCOMMERCE_KEY, // Your consumer key
  consumerSecret: process.env.WOOCOMMERCE_SECRET, // Your consumer secret
  version: "wc/v3", // WooCommerce WP REST API version
});

const updateProduct = async (id, data) => {
  return WooCommerce.put(`products/${id}`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = { updateProduct };
