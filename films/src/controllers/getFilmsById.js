const axios = require("axios").default;
const { response } = require("../utils");

module.exports = async (req, res) => {
  let { id } = req.params;
  axios
    .get(`http://database:8004/Film/${id}`)
    .then(({ data }) => response(res, 200, data));
};
