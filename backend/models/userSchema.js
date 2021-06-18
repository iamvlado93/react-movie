const mongoose = require("mongoose");

const User = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  rePassword: { type: String, require: true },
});

module.exports = mongoose.model("User", User);
