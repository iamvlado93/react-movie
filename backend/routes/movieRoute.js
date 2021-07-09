const express = require("express");
const {
  createMovie,
  fetchMovies,
  deleteMovie,
  updateMovie,
} = require("../controllers/movies.js");

const router = express.Router();

router.post("/admin", createMovie);
router.get("/profile", fetchMovies);
router.delete("/delete/:id", deleteMovie);
router.put("/update/:id", updateMovie);

module.exports = router;
