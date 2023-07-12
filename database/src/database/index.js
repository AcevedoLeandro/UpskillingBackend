const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");
const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
};

// ****  PRUEBAS!  ****
//       -------

// const Character = conn.model("Character", require("./schemas/characterSchema"));
// const Film = conn.model("Film", require("./schemas/filmSchema"));
// const Planet = conn.model("Planet", require("./schemas/planetSchema"));

// Character.find()
//   .populate("films", ["_id", "title"])
//   .populate("homeworld", ["_id", "name", "diameter", "terrain"])
//   .then((res) => console.log(res[0]));
