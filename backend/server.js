const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const User = require("./models/user");

const app = express();

mongoose.connect(
  "mongodb+srv://vlad:1234@cluster0.jv4fk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("Mongoose is connected")
);

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
require("./passportConfig")(passport);

// Routes -------------------------------------------------

app.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.status(401).send(`User ${req.body.email} already exists`);
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
      res.status(200).send("User Created");
    }
  });
  console.log(req.body);
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw res;
    if (!user) res.status(401).send("No such user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).send("Successfully authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/user", (req, res) => {
  console.log(req.body);
});
// Start server

app.listen(5000, () => {
  console.log("Server is running");
});
