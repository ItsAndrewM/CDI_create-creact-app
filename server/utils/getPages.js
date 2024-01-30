const request = require("request-promise");

const getPages = async () => {
  return request(
    "https://cdifurlers.elementor.cloud/wp-json/wp/v2/pages?per_page=50"
  )
    .then((data) => {
      return JSON.parse(data);
    })
    .then((parsedData) => {
      return parsedData;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = { getPages };
