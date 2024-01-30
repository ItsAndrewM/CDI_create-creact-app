const { getTaxes } = require("../utils/getTaxes");

const handleGetTaxes = async (req, res) => {
  try {
    const taxes = await getTaxes();
    if (taxes) {
      res.status(200).json({
        status: 200,
        message: "taxes retrieved successfully",
        data: taxes,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, taxes were not retrieved",
        error: taxes,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetTaxes };
