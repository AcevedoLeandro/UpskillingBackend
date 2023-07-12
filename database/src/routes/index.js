const { Router } = require("express");
const store = require("../database");
const { modelValidation } = require("../middlewares");

const router = Router();

router.get("/:model", modelValidation, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", modelValidation, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  if (response == null) res.status(200).json([]);
  else res.status(200).json([response]);
});

router.post("/:model", modelValidation, async (req, res) => {
  const { model } = req.params;
  const reg = req.body;
  const response = await store[model].insert(reg);
  res.status(200).json(response);
});

module.exports = router;
