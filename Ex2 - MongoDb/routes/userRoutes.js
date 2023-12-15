let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.userControllers.getUsers(res);
});

router.post("/create", (req, res) => {
  Controllers.userControllers.createUser(req.body, res);
});

module.exports = router;
