const express = require("express");
const { signUp, signIn } = require('../controllers/userController.js')

const router = express.Router();

router.post('/register', signUp);
router.post('/login', signIn);

module.exports = router;