const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");
const paginate = require("../utils/paginate");

const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      data: users,
      message: "амжилттай хэрэглэгчдийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};
