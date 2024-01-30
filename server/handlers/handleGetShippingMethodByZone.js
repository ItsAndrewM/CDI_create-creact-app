const { getShippingMethodByZone } = require("../utils/getShippingMethodByZone");

const handleGetShippingMethodByZone = async (req, res) => {
  try {
    const shipping = await getShippingMethodByZone(0);
    const [furlers, hardware] = shipping;

    if (furlers && hardware) {
      const result = {
        furlers: furlers,
        hardware: hardware,
      };
      res.status(200).json({
        status: 200,
        message: "products retrieved successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, products were not retrieved",
        error: result,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetShippingMethodByZone };
