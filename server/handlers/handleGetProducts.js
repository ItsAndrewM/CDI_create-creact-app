const { getProducts } = require("../utils/getProducts");

require("dotenv").config({
  path: "../.env",
});

const handleGetProducts = async (req, res) => {

  try {
    let results = [];
    const pageNums = new Array(Math.ceil(process.env.PUBLISHED_PRODUCTS / 100));
    let counter = 1;
    for (const num of pageNums) {
      const result = await getProducts(counter);
      if (counter === 1) {
        results = result
      }
      else {
        results = results.concat(result)
      }
      counter++;
    }

    if (results) {
      res.status(200).json({
        status: 200,
        message: `${results.length} products retrieved successfully`,
        data: results,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, products were not retrieved",
        error: results,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetProducts };
