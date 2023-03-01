const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

const Comment = require("./models/comment");
const Contact = require("./models/contact");
const Post = require("./models/post");
const User = require("./models/user");
const Subscribe = require("./models/subscribe");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const deleteData = async () => {
  try {
    // await Comment.deleteMany();
    // await Contact.deleteMany();
    // await Subscribe.deleteMany();
    // await Post.deleteMany();
    // await User.deleteMany();
    console.log("ogogdliig bvgdiig ustaglaa".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
