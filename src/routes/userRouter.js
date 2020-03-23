const express = require("express");
const router = express.Router();
const user_Controller = require("../controller/userController");

router.post("/register", user_Controller.registerUser);
router.post("/login", user_Controller.loginUser);

module.exports = router;
