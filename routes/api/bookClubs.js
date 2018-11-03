const router = require("express").Router();
const bookClubsController = require("../../controllers/bookClubsController");

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

module.exports = router;
