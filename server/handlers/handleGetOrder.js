const { getOrder } = require("../utils/getOrder");

const handleGetOrder = async (req, res) => {
  const { params } = req;
  try {
    if (params) {
      const order = await getOrder(params.id);
      if (order) {
        if (order.data) {
          if (order.data.status === 404) {
            res.status(404).json({
              status: 404,
              message: "something went wrong, order was not retrieved",
              error: order,
            });
          }
        }
        res.status(200).json({
          status: 200,
          message: "order retrieved successfully",
          data: order,
        });
      } else {
        res.status(404).json({
          status: 404,
          message: "something went wrong, order was not retrieved",
          error: order,
        });
      }
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetOrder };
