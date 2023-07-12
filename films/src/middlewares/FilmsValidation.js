const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { _id, title } = req.body;
  if (!_id || !title) throw new ClientError("Faltan datos", 401);

  for (const key in req.body) {
    if (key == "characters" || key == "planets") {
      if (req.body[key].some((f) => typeof f != "string"))
        throw new ClientError(`${key} deben ser tipo string`, 401);
    } else if (typeof req.body[key] != "string")
      throw new ClientError("Los datos deben ser tipo string", 401);
  }

  return next();
};
