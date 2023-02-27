//Хуудаслалт
const paginate = require("../utils/paginate");

const Contact = require("../models/contact");

exports.ExampleCode = async (req, res, next) => {
  const Example = {};
  try {
    const example = await Example.find({});

    res.status(200).json({
      success: true,
      data: example,
      message: "жишээ api function иймэрхүү маягаар code oo бичнэ",
    });
  } catch (error) {
    //Хэрэв алдаа гарвал error middle ware ажилна
    //Хаана байгаа ../middleware/error.js
    next(error);
  }
};

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});

    res.status(200).json({
      success: true,
      data: contacts,
      message: "амжилттай холбогдох хаягуудийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};

exports.createContact = async (req, res, next) => {
  try {
    const createContact = await Contact.create(req.body);
    res.status(200).json({
      success: true,
      data: createContact,
      message: "ta amjilttai holbogdlo",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const _id = req.params.id
    await Contact.deleteOne({_id})
    res.status(200).json({
      success : true,
      message : "contact ustla"
    })
  } catch (error) {
    next(error);
  }
};
