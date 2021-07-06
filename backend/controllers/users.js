const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = require("../models/userSchema.js");

const userRegister = async (req, res) => {
  try {
    await User.findOne({ email: req.body.email }, async (err, doc) => {
      if (err) throw err;
      if (doc)
        return res
          .status(300)
          .json({ message: `User ${req.body.email} already exists` });
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hashedPassword,
          rePassword: req.body.rePassword,
          isAdmin: req.body.isAdmin,
        });
        newUser.save();
        res.status(201).json({ message: "User Created" });
      }
    });
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async (req, res, next) => {
  try {
    await passport.authenticate("local", (err, user, info) => {
      if (err) throw res;
      if (!user) return res.status(401).json("No such user exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.status(200).send(user);
          console.log(req.user);
        });
      }
    })(req, res, next);
  } catch (err) {
    console.log(err);
  }
};

const getUsers = (req, res) => {
  User.find().then((receivedUser) => res.json(receivedUser));
};

module.exports = { userRegister, userLogin, getUsers };
