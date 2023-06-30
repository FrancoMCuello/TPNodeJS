const express = require("express");
const router = express.Router();
const { bookController } = require("../controllers");
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");

router.post("/:bookId", userIsAdminMDW, bookController.createBook);

router.get("/:bookId", jwtValidMDW, bookController.getBook);

router.put("/:bookId", (req, res) => {
  console.log(`Book found with id ${req.params.bookId}`);

  res.json({ id: req.params.bookId, ...req.body });
});

module.exports = router;
