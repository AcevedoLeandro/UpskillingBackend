const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { _id, name } = req.body;
  if (!_id || !name) throw new ClientError("Faltan datos", 401);

  for (const key in req.body) {
    if (key == "films") {
      if (req.body[key].some((f) => typeof f != "string"))
        throw new ClientError("Films deben ser tipo string", 401);
    } else if (typeof req.body[key] != "string")
      throw new ClientError("Los datos deben ser tipo string", 401);
  }

  return next();
};
