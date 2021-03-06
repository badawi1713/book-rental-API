const express = require("express");
const router = express.Router();
const genre_Controller = require("../controller/genreController");
const auth = require("../helpers/auth");

router.get("/", genre_Controller.getAllGenre);
router.post(
  "/add",
  auth.authInfo,
  auth.accessToken,
  genre_Controller.addNewGenre
);
router.patch(
  "/update/:id",
  auth.authInfo,
  auth.accessToken,
  genre_Controller.editGenreData
);
router.delete(
  "/delete/:id",
  auth.authInfo,
  auth.accessToken,
  genre_Controller.deleteGenreData
);

module.exports = router;
