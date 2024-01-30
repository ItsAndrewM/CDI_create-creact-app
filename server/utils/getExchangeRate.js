const request = require("request-promise");

require("dotenv").config({
  path: "../.env",
});

const getExchangeRate = async (curCode) => {
  return request(
    `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_KEY}/latest/${curCode}`
  )
    .then((res) => {
      return JSON.parse(res);
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.error;
    });
};

module.exports = { getExchangeRate };
