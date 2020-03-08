const express = require("express");
const router = express.Router();
const genre_Controller = require("../controller/genre_Controller");
const auth = require("../helpers/auth")

router.get("/", auth.authInfo, auth.accessToken, genre_Controller.getAllGenre);
router.post("/add-genre", auth.authInfo, auth.accessToken, genre_Controller.addNewGenre);
router.patch("/edit-genre/:id", auth.authInfo, auth.accessToken, genre_Controller.editGenreData);
router.delete("/delete-genre/:id", auth.authInfo, auth.accessToken, genre_Controller.deleteGenreData);

module.exports = router;