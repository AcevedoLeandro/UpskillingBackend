const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const router = Router();

router.get("/", controllers.getFilms);
router.get(`/:id`, controllers.getFilmsById);
router.post("/", middlewares.FilmsValidation, controllers.createFilms);

module.exports = router;
