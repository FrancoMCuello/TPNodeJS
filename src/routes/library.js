const express = require("express");
const router = express.Router();
const { libraryController } = require("../controllers");
//const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth-mdw");


router.post("/:libraryId", libraryController.createLibrary); //, userIsAdminMDW

router.get("/:libraryId", libraryController.getLibrary); // jwtValidMDW,

router.put("/:libraryId", (req, res) => {
  console.log(`Book found with id ${req.params.libraryId}`);

  res.json({ id: req.params.bookId, ...req.body });
});

module.exports = router;