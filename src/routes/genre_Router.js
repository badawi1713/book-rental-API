const express = require("express");
const router = express.Router();
const genre_Controller = require("../controller/genre_Controller");
const auth = require("../helpers/auth")

router.get("/", genre_Controller.getAllGenre);
router.post("/add-genre", genre_Controller.addNewGenre);
router.patch("/edit-genre/:id", genre_Controller.editGenreData);
router.delete("/delete-genre/:id", genre_Controller.deleteGenreData);

module.exports = router;