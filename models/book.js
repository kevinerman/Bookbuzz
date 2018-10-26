const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: false },
  author: { type: String, required: false },
  snippet : { type: String, required: false },
  preview: { type: String, required: false },
  URL:{ type: String, required: false } 

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;