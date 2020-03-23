require("dotenv").config();
const helper = require("../helpers/response");
const User = require("../model/userModel");
const moment = require("moment");
const jwt = require("jsonwebtoken");

exports.registerUser = (req, res, next) => {
  //   const currentDate = moment(new Date(Date.now())).format("L");
  const salt = helper.getRandomSalt(process.env.LENGTH_SALT);
  const passwordHash = helper.setPassword(req.body.password, salt);
  // console.log(salt);

  const data = {
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    password: passwordHash.passwordHash,
    // registered_at: currentDate,
    salt: passwordHash.salt
  };
  console.log(data.email);
  User.getAllUser()
    .then(result => {
      User.register(data)
        .then(data => {
          helper.response(
            res,
            "New user has been registered",
            data,
            201,
            false
          );
          console.log("New user has been registered");
        })
        .catch(error => {
          // console.log(error);
          helper.response(res, "Email has been registered", error, 409, true);
        });
    })
    .catch(error => {
      console.log(error);
      helper.response(res, "Data is not found", error, 404, true);
    });
};

exports.loginUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getByEmail(email)
    .then(data => {
      const userData = data[0];
      const userPassword = helper.setPassword(password, userData.salt)
        .passwordHash;
      console.log("data", userData);
      if (userPassword === userData.password) {
        userData.token = jwt.sign(
          {
            email: userData.email,
            id: userData.id
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "3600s"
          }
        );

        delete userData.salt;
        delete userData.password;
        return helper.response(res, "Login success", userData, 200, false);
      } else {
        return helper.response(
          res,
          "Access denied. Email or Password is wrong",
          null,
          401,
          true
        );
      }
    })
    .catch(error => {
      console.log(error);
      return helper.response(
        res,
        "Email is not registered",
        `Please make sure your email is correct`,
        404,
        true
      );
    });
};
