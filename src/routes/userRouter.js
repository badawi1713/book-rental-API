const express = require("express");
const router = express.Router();
const user_Controller = require("../controller/userController");

// router.get("/", user_Controller.getAllBooks);
// router.get("/:id", user_Controller.getBookDataByID);
// router.patch("/rent-book/:id", user_Controller.rentBookByUser);
router.post('/register', user_Controller.registerUser)
router.post('/login', user_Controller.loginUser)

module.exports = router