const { getCoupons } = require("../utils/getCoupons");

const handleGetCoupons = async (req, res) => {
  try {
    const coupons = await getCoupons();
    if (coupons) {
      if (coupons.data) {
        if (coupons.data.status === 404) {
          res.status(404).json({
            status: 404,
            message: "something went wrong, coupons were not retrieved",
            error: coupons,
          });
        }
      }
      res.status(200).json({
        status: 200,
        message: "coupons retrieved successfully",
        data: coupons,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, coupons were not retrieved",
        error: coupons,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetCoupons };
