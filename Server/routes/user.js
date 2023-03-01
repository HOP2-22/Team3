const express = require("express");

const {
  getUsers,
  deleteUser,
  getUser,
  updateUser,
  register,
  login,
  updatePass,
  checkUser,
} = require("../controller/user");

const router = express.Router();

router.route("/").get(getUsers).post(checkUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/auth/signup").post(register);
router.route("/auth/login").post(login);
router.route("/auth/updatePassword").post(updatePass);

module.exports = router;
