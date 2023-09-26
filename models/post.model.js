const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: String,
  image: String,
  category: String,
  date: String,
  title: String,
  description: String,
  omments: String,

});

const PostModel = mongoose.model("posts", PostSchema);

module.exports = { PostModel };
