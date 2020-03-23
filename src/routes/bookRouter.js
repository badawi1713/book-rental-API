const express = require("express");
const router = express.Router();
const book_Controller = require("../controller/bookController");
const auth = require("../helpers/auth");

// List of book's routes
router.get("/", book_Controller.getAllBooks);
router.get("/:id", book_Controller.getBookDataByID);
router.post("/add", book_Controller.addNewBook);
router.patch(
  "/update/:id",

  book_Controller.editBookData
);
router.patch(
  "/rent/:id",

  book_Controller.rentBook
);
router.patch(
  "/return/:id",

  book_Controller.returnBook
);
router.delete(
  "/delete/:id",

  book_Controller.deleteBookData
);

module.exports = router;
