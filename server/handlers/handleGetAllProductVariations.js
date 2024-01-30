const { getProductVariations } = require("../utils/getProductVariations");
const { getProducts } = require("../utils/getProducts");

require("dotenv").config({
  path: "../.env",
});

const handleGetAllProductVariations = async (req, res) => {
  try {
    let products = [];
    const pageNums = new Array(Math.ceil(process.env.PUBLISHED_PRODUCTS / 100));
    let counter = 1;
    for (const num of pageNums) {
      const result = await getProducts(counter);
      if (counter === 1) {
        products = result
      }
      else {
        products = products.concat(result)
      }
      counter++;
    }
    const productVarationArr = [];
    if (products) {
      for (const product of products) {
        if (product.type === "variable") {
          const productVar = await getProductVariations(product.id);
          if (productVar) {
            const productObj = {
              id: product.id,
              variations: productVar,
            };
            productVarationArr.push(productObj);
          }
        }
      }
      if (productVarationArr) {
        res.status(200).json({
          status: 200,
          message: `${productVarationArr.length} product variations retrieved successfully`,
          data: productVarationArr,
        });
      } else {
        res.status(404).json({
          status: 404,
          message:
            "something went wrong, product variations were not retrieved",
          error: productVarationArr,
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, products were not retrieved",
        error: products,
      });
      throw new Error();
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetAllProductVariations };
