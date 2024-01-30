const { getProductVariations } = require("../utils/getProductVariations");

const handleGetProductVariations = async (req, res) => {
  const { params } = req;
  try {
    const productVar = await getProductVariations(params.id);
    const productObj = {
      id: params.id,
      variations: productVar,
    };
    if (productObj) {
      res.status(200).json({
        status: 200,
        message: "product variations retrieved successfully",
        data: productObj,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, product variations were not retrieved",
        error: productObj,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetProductVariations };
