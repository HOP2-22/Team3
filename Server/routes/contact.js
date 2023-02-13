const express = require("express");

const { getContacts } = require("../controller/contact");

const router = express.Router();

router.route("/").get(getContacts);

module.exports = router;
