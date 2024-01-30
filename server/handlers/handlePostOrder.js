const { postOrder } = require("../utils/postOrder");

const handlePostOrder = async (req, res) => {
  const { body, params } = req;
  try {
    if (body.billing && body.line_items && body.total_tax && body.currency) {
      const result = await postOrder(body);
      if (result) {
        res.status(200).json({
          status: 200,
          message: "order created successfully",
          data: result,
        });
      } else {
        res.status(404).json({
          status: 404,
          message: "something went wrong, order was not created",
          error: result,
        });
        throw new Error();
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    return error;
  }
};

module.exports = { handlePostOrder };
