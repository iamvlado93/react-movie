const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("./models/userSchema.js");

// Registration route

const signUp = async (req, res) => {
    try {
      User.findOne({ email: req.body.email }, async (err, doc) => {
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

// Login Route

  const signIn = async (req, res, next) => {
    try {
      passport.authenticate("local", (err, user, info) => {
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

//   User Route

const userInfo = (req, res) => {
    console.log(req.body);
};

// Exports

module.exports = { signUp, signIn, userInfo };