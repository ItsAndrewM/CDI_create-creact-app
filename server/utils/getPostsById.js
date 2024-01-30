const request = require("request-promise");

const getPostsById = async (id) => {
  return request(`https://cdifurlers.elementor.cloud/wp-json/wp/v2/posts/${id}`)
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

module.exports = { getPostsById };
