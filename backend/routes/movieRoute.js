const express = require("express");
const { createMovie, fetchMovies } = require("../controllers/movies.js");

const router = express.Router();

router.post("/admin", createMovie);
router.get("/profile", fetchMovies);

module.exports = router;
