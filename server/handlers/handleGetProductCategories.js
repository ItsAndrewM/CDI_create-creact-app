const { getProductCategories } = require("../utils/getProductCategories");

const handleGetProductCategories = async (req, res) => {
  try {
    const categories = await getProductCategories();
    if (categories) {
      res.status(200).json({
        status: 200,
        message: `${categories.length} product categories retrieved successfully`,
        data: categories,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, product categories were not retrieved",
        error: categories,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetProductCategories };
