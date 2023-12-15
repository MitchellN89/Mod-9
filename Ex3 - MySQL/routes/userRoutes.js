const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Gets all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Gets one user
router.get("/:userId", (req, res) => {
  Controllers.userController.getOneUser(req.params.userId, res);
});

// Creates new user
router.post("/create_user", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});

// Creates new post
router.post("/:userId/create_post", (req, res) => {
  Controllers.postController.createPost(req.body, req.params.userId, res);
});

module.exports = router;
