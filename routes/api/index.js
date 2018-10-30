const router = require("express").Router();
const bookRoutes = require("./books");
const bookClubRoutes = require("./bookClubs");

// Book routes
router.use("/books", bookRoutes);
router.use("/bookclubs", bookClubRoutes);

module.exports = router;
