const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: false },
  savedBooks: [{ type: String }],
  savedClubs: [{ type: String }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;