const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", Controllers.triviaController.getQuestions);

router.get("/:category", Controllers.triviaController.getQuestions);

router.get("/:category/:difficulty", Controllers.triviaController.getQuestions);

router.get(
  "/:category/:difficulty/:type",
  Controllers.triviaController.getQuestions
);

module.exports = router;
