const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");
const paginate = require("../utils/paginate");

const Post = require("../models/post");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({
      success: true,
      data: posts,
      message: "амжилттай постуудын мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};
