const express = require("express");
const {
  userRegister,
  userLogin,
  getUsers,
} = require("../controllers/users.js");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/users", getUsers);

module.exports = router;
