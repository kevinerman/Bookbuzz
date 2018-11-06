const router = require("express").Router();
const bookClubsController = require("../../controllers/bookClubsController");
const db = require("../../models");

// Matches with "/api/books"
router.route("/")
  .get(bookClubsController.findAll)
  .post(bookClubsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookClubsController.findById)
  .put(bookClubsController.update)
  .delete(bookClubsController.remove);


router.post('/search', function(req, res){
    console.log(req.body.searchByBookNameByBook, "This is the search object");
    
    db.Club.find({bookName:req.body.searchByBookNameByBook })
    .then(result => {
      res.send(result);
    })
   
});

router.post('/search2', function(req, res){
  console.log(req.body.searchClubName, "This is the search object in bookclub.js");
  
  db.Club.find({clubName:req.body.searchClubName })
  .then(result => {
    res.send(result);
  })
 
});

router.post('/addClub', function(req, res){
  // console.log(req.body.searchClubName, "This is the search object in bookclub.js *%%*&%^E*^E");
  console.log(req.body, "This is the search object in bookclub.js in line 40 bookclub.js");
  console.log(req.body._id );

  // db.User.findByIdAndUpdate(this.User._id, {savedClubs:req.body._id })
  // .then(result => {
  //   res.send(result);
  // })
 
});



module.exports = router;
