require("dotenv").config({
  path: "../.env",
});

const { getShippingZones } = require("../utils/getShippingZones");

const handleGetShippingZones = async (req, res) => {
  try {
    const shippingZones = await getShippingZones();
    if (shippingZones) {
      res.status(200).json({
        status: 200,
        message: "shipping zones retrieved successfully",
        data: shippingZones,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, shipping zones were not retrieved",
        error: shippingZones,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetShippingZones };
