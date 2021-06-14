const express = require("express");
const router = express.Router();

const User = require("../models/user");

// Registration route

router.route("/register").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const rePassword = req.body.rePassword;
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    rePassword,
  });
  newUser.save();
});

router.route("/user").get((req, res) => {
  User.find().then((receivedUser) => res.json(receivedUser));
});

module.exports = router;
