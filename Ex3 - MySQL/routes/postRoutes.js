const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Gets all posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// Gets one post as per the ID
router.get("/:postId", (req, res) => {
  Controllers.postController.getOnePost(req.params.postId, res);
});

router.get("/:postId/comments", (req, res) => {
  Controllers.userPostCommentController.getComments(req.params.postId, res);
});
// Adds a like to the ID
router.put("/:postId/add_like", (req, res) => {
  Controllers.postController.addLike(req.params.postId, res);
});

router.post("/:postId/create_comment", (req, res) => {
  Controllers.userPostCommentController.createComment(
    req.body,
    req.params.postId,
    res
  );
});

module.exports = router;
