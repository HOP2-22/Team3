const paginate = require("../utils/paginate");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { param } = require("../routes/user");

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

//Admin

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      data: users,
      message: "амжилттай хэрэглэгчдийн мэдээлэлийг авлаа",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const _id = req.params.id
    await User.findByIdAndDelete({_id})
    res.status(200).json({
      success : true,
      message : "hereglegc ustla"
    })
  } catch (error) {
    next(error);
  }
};

//User

exports.getUser = async (req, res, next) => {
  try {
    const _id = req.params.id
    const user = await User.findById({_id})
    res.status(200).json({
      success : true,
      data : user
    })
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const _id = req.params.id 
    const userName = req.body
    await User.findByIdAndUpdate({_id} , userName)
    const user = await User.findById({_id})
    res.status(200).json({
      success : true,
      data : user
    })
  } catch (error) {
    next(error);
  }
};

//Auth

exports.register = async (req, res, next) => {
  const { password, firstName, lastName, email } = req.body;

  const mail = await User.findOne({ email });

  if (mail) { 
    return res
      .status(400)
      .json({ message: "hereglegchiin email burtgeltei bn" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
    });
    res.status(200).json({
      success: true,
      data: user,
      message: "hereglegc amjilttai uuslee",
    });
  } catch (error) {
    next(error);
  }
};

const ACCESS_TOKEN = "8000";

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }
  
    const match = await bcrypt.compare(password, user?.password);
  
    if (match) {
      const token = jwt.sign(
        {
          user: user.email,
        },
        ACCESS_TOKEN
      );
      res.status(200).json({
        message: "Амжилттай нэвтэрлээ",
        token: token,
        success : true
      });
    } 
  } catch (error) {
    next(error);
  }
};

exports.updatePass = async (req, res, next) => {
  try {
    const {email} = req.body
    const user = await User.find({email})
    if(!user){
      res.status(400).send(error)
    } else {
      return res.status(200).json({
        success : true,
        message : 'newterle odo passa solij bolno', 
      })
    }
  } catch (error) {
    next(error);
  }
};

exports.verifyUser = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
