require("dotenv").config({
  path: "./.env",
});

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "https://cdifurlers.elementor.cloud/", // store URL
  consumerKey: process.env.WOOCOMMERCE_KEY, // consumer key
  consumerSecret: process.env.WOOCOMMERCE_SECRET, // consumer secret
  version: "wc/v3", // WooCommerce WP REST API version
});

const getShippingZones = async () => {
  return WooCommerce.get("shipping/zones")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = { getShippingZones };
