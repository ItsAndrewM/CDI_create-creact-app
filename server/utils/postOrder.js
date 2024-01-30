require("dotenv").config({
  path: "./.env",
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

// data = {
//   payment_method: "ppcp-gateway",
//   payment_method_title: "PayPal",
//   transaction_id: "04311456BY9743516",
//   shipping_tax: "",
//   total_tax: "",
//   currency: "CAD",
//   billing: {
//     first_name: "John",
//     last_name: "Doe",
//     address_1: "969 Market",
//     address_2: "",
//     city: "San Francisco",
//     state: "CA",
//     postcode: "94103",
//     country: "US",
//     email: "john.doe@example.com",
//     phone: "(555) 555-5555",
//   },
//   line_items: [
//     {
//       product_id: 454,
//       quantity: 1,
//     },
//   ],
//   shipping_lines: [
//     {
//       method_id: "flat_rate",
//       total: "150.00",
//     },
//   ],
// };

const postOrder = async (data) => {
  return WooCommerce.post("orders", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

module.exports = { postOrder };
