const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/BookBuzz", { useNewUrlParser: true }
);

// Routes


app.post("/saveBook", function(req, res) {
db.Book.create({title: req.body.title, author: req.body.author})
  .then(function(dbBook) {
    res.json(dbBook);
  })
  .catch(function(err) {
    console.log(err.message);
  });
});

db.User.create(
  {username: "BookLover44",
  savedBooks: [],
  savedClubs: []}
).catch(function(err) {
  console.log(err.message);
});

db.Club.create(
  {clubName: "Books for Dads",
  currentBook: "Hop on Pop",
  meetingDate: "Every Tuesday at 7PM",
  clubMembers: []}
).catch(function(err) {
  console.log(err.message);
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});