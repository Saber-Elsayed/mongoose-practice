const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: [],
});

const person = mongoose.model("person", bookSchema);
module.exports = person;
