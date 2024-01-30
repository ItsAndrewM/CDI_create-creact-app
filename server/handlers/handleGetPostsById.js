const { getPosts } = require("../utils/getPosts");
const { getPostsById } = require("../utils/getPostsById");

const handleGetPostsById = async (req, res) => {
  const { params } = req;
  try {
    const post = await getPostsById(params.id);

    if (post) {
      res.status(200).json({
        status: 200,
        message: "posts retrieved successfully",
        data: post,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, posts were not retrieved",
        error: post,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetPostsById };
