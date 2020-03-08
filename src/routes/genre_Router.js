const express = require("express");
const router = express.Router();
const genre_Controller = require("../controller/genre_Controller");
const auth = require("../helpers/auth")

router.get("/", auth.authInfo, auth.accessToken, genre_Controller.getAllGenre);
router.post("/add", auth.authInfo, auth.accessToken, genre_Controller.addNewGenre);
router.patch("/update/:id", auth.authInfo, auth.accessToken, genre_Controller.editGenreData);
router.delete("/delete/:id", auth.authInfo, auth.accessToken, genre_Controller.deleteGenreData);

module.exports = router;