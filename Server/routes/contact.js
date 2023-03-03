const express = require("express");

const {
  getContacts,
  createContact,
  deleteContact,
} = require("../controller/contact");

const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router.delete("/:id", deleteContact);

module.exports = router;
