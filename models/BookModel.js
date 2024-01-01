const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: string,
  pages: Number,
  genres: [string],
  rating: rating,
});

const book = mongoose.model("book", bookSchema);
module.exports = book;
