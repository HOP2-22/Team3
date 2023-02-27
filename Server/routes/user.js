const express = require("express");

const {
  //Admin l bvh useriin medeeleliig avna
  getUsers,

  //Admin l user-iig ustagdag baina
  deleteUser,

  //Hereglegchiig oroh uyed hereglegchiin medeeleliig duudaj ogoh api
  getUser,

  //Hereglegch ooriinhoo medeeleliig solih uyed ashiglagdah api
  updateUser,

  //Hereglegchiin authentication
  //1.shineer bvrtgvvleh 2.nevtreh 3.Passwordoo solih 4.Hereglegchiig batatgah
  register,
  login,
  updatePass,
  verifyUser,
} = require("../controller/user");

const router = express.Router();

router.route("/getUsers").get(getUsers);
router.route("/deleteUser/:id").delete(deleteUser);

router.route("/:id").get(getUser);
router.route("/reset/:id").put(updateUser);

router.route("/auth/signup").post(register);
router.route("/auth/login").post(login);
router.route("/auth/updatePassword").put(updatePass);
router.route("/auth/verify").post(verifyUser);

module.exports = router;
