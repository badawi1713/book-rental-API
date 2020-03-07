const express = require("express");
const router = express.Router();
const book_Controller = require("../controller/book_controller");
const auth = require("../helpers/auth")

// List of book's routes
router.get("/", book_Controller.getAllBooks);
router.get("/:id", book_Controller.getBookDataByID);
router.post("/add-book", auth.authInfo, book_Controller.addNewBook);
router.patch("/edit-book/:id", book_Controller.editBookData);
router.patch("/rent-book/:id", book_Controller.rentBook);
router.patch("/return-book/:id", book_Controller.returnBook);
router.delete("/delete-book/:id", book_Controller.deleteBookData);

// router.get("/books", admin_Controller.getBookPagination);
// router.get("/search", admin_Controller.getSearchBookByTitle);
// router.get("/sort-by-title", admin_Controller.getSortBookByTitle);
// router.get("/sort-by-date", admin_Controller.getSortBookByDate);
// router.get("/sort-by-genre", admin_Controller.getSortBookByGenre);
// router.get("/sort-by-available", admin_Controller.getSortBookByAvailable);

module.exports = router;