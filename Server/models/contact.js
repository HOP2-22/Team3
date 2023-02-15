const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email : {
        type : "string",
        required : true
    },
    text : {
        type : "string",
        required : true
    },
    name : {
        type : "string",
    }
});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
