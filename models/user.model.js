const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  confirm_pass: String
});

const UsersModel = mongoose.model("users", UserSchema);

module.exports = {UsersModel};
