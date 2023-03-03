const asyncHandler = require("../middleWare/asyncHandler");
const Contact = require("../models/contact");

exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find({});

  res.status(200).json({
    success: true,
    data: contacts,
    message: "Get all contacts",
  });
});

exports.createContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findOne({ email: req.body.email });

  let contact1;

  if (contact) {
    contact.text.push(req.body.text);
    contact.name = req.body.name;
    contact.save();
  } else {
    contact1 = await Contact.create(req.body);
  }

  res.status(200).json({
    success: true,
    data: contact || contact1,
    message: "Send your contact",
  });
});

exports.deleteContact = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const contact = await Contact.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    data: contact,
    message: "Contact deleted",
  });
});
