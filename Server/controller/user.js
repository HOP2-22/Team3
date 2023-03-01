const paginate = require("../utils/paginate");
const asyncHandler = require("../middleWare/asyncHandler");
const MyError = require("../utils/myError");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.checkUser = asyncHandler(async (req, res, next) => {
  const token = req?.headers?.token;

  if (!token) {
    res.status(404).json({
      success: false,
      message: "Invalid token",
    });
  }
  const data = await jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(data.id);

  res.status(200).json({
    success: true,
    data: { user, data },
    message: "successfully check token",
  });
});

exports.getUsers = asyncHandler(async (req, res, next) => {
  const { limit, sort } = req.query;
  delete req.query.limit;

  const users = await User.find({})
    .populate("userPost")
    .limit(limit)
    .sort(sort);

  res.status(200).json({
    success: true,
    data: users,
    message: "Get all users information",
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  user.remove();

  res.status(200).json({
    success: true,
    data: user,
    message: "User deleted",
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const { select } = req.query;
  ["select"].map((el) => delete req.query[el]);

  const user = await User.findById(req.params.id, select).populate("userPost");

  res.status(200).json({
    success: true,
    data: user,
    message: "user data",
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new MyError(`wrong ID`, 404);
  }

  res.status(200).json({
    isDone: true,
    data: user,
    message: "user updated",
  });
});

exports.register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  const token = user.getJWT();
  user.profileImageGenerator(req.body.gender);

  await user.save();

  res.status(200).json({
    success: true,
    data: { token, user },
    message: "registered successfully",
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new MyError("write your email or password", 400);
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) {
    throw new MyError("wrong your email or password", 400);
  }

  const isOkey = await user.checkPassword(password);

  if (!isOkey) {
    throw new MyError("wrong your email or password", 400);
  }

  const token = user.getJWT();

  user.password = "";

  res.status(200).json({
    success: true,
    data: { token, user },
    message: "user loged",
  });
});

exports.updatePass = asyncHandler(async (req, res, next) => {
  const user = await User.findOne();

  if (!user) {
    throw new MyError(`user not found`, 404);
  }

  user.password = req.body.password;

  await user.save();

  res.status(200).json({
    isDone: true,
    user: user,
    message: "Password changed successfully",
  });
});
