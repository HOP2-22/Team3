const express = require("express");

const { getPosts } = require("../controller/post");

const router = express.Router();

router.route("/").get(getPosts);

module.exports = router;
