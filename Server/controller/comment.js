const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");
const paginate = require("../utils/paginate");

const Comment = require("../models/comment");

exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({});

    res.status(200).json({
      success: true,
      data: comments,
      message: "амжилттай комэнтүүдийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};
