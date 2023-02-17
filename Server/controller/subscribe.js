const asyncHandler = require("../middleWare/asyncHandler");
const Subscribe = require("../models/subscribe");

exports.getSubscribes = async (req, res, next) => {
  try {
    const subscribe = await Subscribe.find({});

    res.status(200).json({
      success: true,
      data: subscribe,
      message: "Get all subscribes information",
    });
  } catch (error) {
    next(error);
  }
};

exports.createSubscribe = async (req, res, next) => {
  try {
    const subscribe = await Subscribe.create(req.body);

    res.status(200).json({
      success: true,
      data: subscribe,
      message: "Subscribe successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSubscribe = async (req, res, next) => {
  try {
    const { id } = req.body;

    const subscribe = await Subscribe.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: subscribe,
      message: "Subscribe deleted",
    });
  } catch (error) {
    next(error);
  }
};
