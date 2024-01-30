const { getPostsCategories } = require("../utils/getPostsCategories");

const handleGetPostsCategories = async (req, res) => {
  try {
    const categories = await getPostsCategories();
    if (categories) {
      res.status(200).json({
        status: 200,
        message: `${categories.length} post categories retrieved successfully`,
        data: categories,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, post categories were not retrieved",
        error: categories,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetPostsCategories };
