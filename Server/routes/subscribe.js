const express = require("express");

const {
  //admin bvh subscribe iin medeelig avna bas ustgana
  getSubscribes,
  deleteSubscribe,

  // hereglegch ooroo subscribe vvsgene 1 hayagaas 1 l udaaa
  createSubscribe,
} = require("../controller/subscribe");

const router = express.Router();

router
  .route("/")
  .get(getSubscribes)
  .post(createSubscribe)
  .delete(deleteSubscribe);

module.exports = router;
