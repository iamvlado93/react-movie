const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const User = require("./models/userSchema.js");

const app = express();
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://vlad:1234@cluster0.jv4fk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      },
      console.log("Mongoose is connected")
    );
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();

// Middleware --------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

// Routes -------------------------------------------------

app.post("/register", async (req, res) => {
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
});

app.post("/login", async (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw res;
      if (!user) return res.status(401).json("No such user exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.status(200).json("Successfully authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  } catch (err) {
    console.log(err);
  }
});

app.post("/user", (req, res) => {
  console.log(req.body);
});
