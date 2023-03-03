const express = require("express");

const {
  getComments,
  getCommentsByPost,
  createComment,
  updateComment,
  deleteComment,
} = require("../controller/comment");

const router = express.Router();

router.route("/").get(getComments).post(createComment);
router.get("/:id/post", getCommentsByPost);
router.route("/:id").put(updateComment).delete(deleteComment);

module.exports = router;
