const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
