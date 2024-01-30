const request = require("request-promise");

const getPosts = async () => {
  return request(
    "https://cdifurlers.elementor.cloud/wp-json/wp/v2/posts?per_page=50&status=publish"
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

module.exports = { getPosts };
