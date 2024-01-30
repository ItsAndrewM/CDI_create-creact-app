const { getExchangeRate } = require("../utils/getExchangeRate");

const handleGetExchangeRate = async (req, res) => {
  const { params } = req;
  try {
    const result = await getExchangeRate(params.curCode);
    if (result.result === "success") {
      res.status(200).json({
        status: 200,
        message: "exchange rate retrieved successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, exchange rate was not retrieved",
        error: result,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetExchangeRate };
