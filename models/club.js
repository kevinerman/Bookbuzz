const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  clubName: { type: String, required: false },
  currentBook: { type: String, required: false },
  meetingDate: {type: String},
  clubMembers: [{type: String}]
});

const Club = mongoose.model("Club", ClubSchema);

module.exports = Club;