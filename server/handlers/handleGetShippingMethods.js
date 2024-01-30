require("dotenv").config({
  path: "../.env",
});

const { getShippingMethods } = require("../utils/getShippingMethods");

const handleGetShippingMethods = async (req, res) => {
  try {
    const shippingMethods = await getShippingMethods();
    if (shippingMethods) {
      res.status(200).json({
        status: 200,
        message: "shipping methods retrieved successfully",
        data: shippingMethods,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, shipping methods were not retrieved",
        error: shippingMethods,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetShippingMethods };
