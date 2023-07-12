const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  getPlanetsById: catchedAsync(require("./getPlanetsById")),
  createPlanets: catchedAsync(require("./createPlanets")),
};
