const express = require("express");

const {
  createMovie,
  fetchMovies,
  deleteMovie,
  updateMovie,
  addFavMovie,
  getFavMovie,
} = require("../controllers/movies.js");

const router = express.Router();

router.post("/admin", createMovie);
router.get("/profile", fetchMovies);
router.delete("/delete/:id", deleteMovie);
router.put("/update/:id", updateMovie);
router.post("/favourites", addFavMovie);
router.get("/profile/favorites", getFavMovie);

module.exports = router;
