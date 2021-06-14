const mongoose = require("mongoose");

const userSchema = {
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  rePassword: { type: String, require: true },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
