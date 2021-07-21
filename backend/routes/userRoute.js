const express = require("express");
const {
  userRegister,
  userLogin,
  getUsers,
  authUserInfo,
  userLogOut,
} = require("../controllers/users.js");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/users", getUsers);
router.get("/profile/user", authUserInfo);
router.get("/logout", userLogOut);

module.exports = router;
