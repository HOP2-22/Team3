const MyError = require("../utils/myError");
const asyncHandler = require("../middleWare/asyncHandler");
const paginate = require("../utils/paginate");

const Contacts = require("../models/comment");

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contacts.find({});

    res.status(200).json({
      success: true,
      data: contacts,
      message: "амжилттай холбогдох хэрэглэгчдийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};
