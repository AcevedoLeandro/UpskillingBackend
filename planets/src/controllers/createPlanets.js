const axios = require("axios").default;
const { response } = require("../utils");

module.exports = async (req, res) => {
  axios
    .post("http://database:8004/Planet", req.body)
    .then(({ data }) => response(res, 200, data));
};

//debe ir nombde del modelo!
