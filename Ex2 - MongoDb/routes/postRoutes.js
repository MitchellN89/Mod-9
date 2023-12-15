let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.postControllers.getUsers(res);
});

router.post("/create", (req, res) => {
  Controllers.postControllers.createPost(req.body, res);
});

router.get("/:postId", (req, res) => {
  Controllers.postControllers.getOnePost(req.params.postId, res);
});

// The below increments the likes field in the specific post by 1.
// This is obviously not how this would be handled as it really ought to link to the user who made the like to ensure they can only have one like per one post
router.patch("/:postId/addlike", (req, res) => {
  Controllers.postControllers.addLike(req.params.postId, res);
});

router.get("/:postId/comments", (req, res) => {
  Controllers.postControllers.getComments(req.params.postId, res);
});

router.post("/:postId/comments/create", (req, res) => {
  Controllers.postControllers.createComment(req.params.postId, req.body, res);
});

module.exports = router;
