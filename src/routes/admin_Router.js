const express = require("express");
const router = express.Router();
const admin_Controller = require("../controller/admin_controller");

router.get("/", admin_Controller.getAllBooks);
router.get("/books", admin_Controller.getBookPagination);
router.get("/search", admin_Controller.getSearchBookByTitle);
router.get("/sort-by-title", admin_Controller.getSortBookByTitle);
router.get("/sort-by-date", admin_Controller.getSortBookByDate);
router.get("/sort-by-genre", admin_Controller.getSortBookByGenre);
router.get("/sort-by-available", admin_Controller.getSortBookByAvailable);
router.get("/:id", admin_Controller.getBookDataByID);
router.post("/add-book", admin_Controller.addNewBook);
router.patch("/edit-book/:id", admin_Controller.editBookData);
router.delete("/delete-book/:id", admin_Controller.deleteBookData);

module.exports = router;