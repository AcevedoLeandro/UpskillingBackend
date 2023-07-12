const axios = require("axios").default;
const { response } = require("../utils");

module.exports = async (req, res) => {
  axios
    .get("http://database:8004/Planet")
    .then(({ data }) => response(res, 200, data));
};
//debe ir nombde del modelo!
