const express = require("express");

const {
  getSubscribes,
  createSubscribe,
  deleteSubscribe,
} = require("../controller/subscribe");

const router = express.Router();

router.route("/").get(getSubscribes).post(createSubscribe);

router.delete("/:id", deleteSubscribe);

module.exports = router;
