const express = require("express");

const { getComments } = require("../controller/comment");

const router = express.Router();

router.route("/").get(getComments);

module.exports = router;
