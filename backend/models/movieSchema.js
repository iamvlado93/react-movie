const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  movieDescription: { type: String, require: true },
  movieCountry: { type: String, require: true },
  movieYear: { type: String, require: true },
  movieGenre: { type: String, required: true },
  movieDuration: { type: String, required: true },
  movieRating: { type: String, required: true },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
