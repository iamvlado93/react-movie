const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  rePassword: { type: String, require: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
