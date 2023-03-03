const express = require("express");

const {
  getPosts,
  getPost,
  getPostsByUser,
  createPost,
  updatePost,
  deletePost,
  addLike,
} = require("../controller/post");

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.get("/:id/user", getPostsByUser);
router.post("/addLike", addLike);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
