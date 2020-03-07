require("dotenv").config();
const helper = require("../helpers/response");
const User = require("../model/user_Model");
const moment = require("moment");
const jwt = require('jsonwebtoken')

exports.registerUser = (req, res, next) => {
    const currentDate = moment(new Date(Date.now())).format("L");
    const salt = helper.getRandomSalt(process.env.LENGTH_SALT);
    const passwordHash = helper.setPassword(req.body.password, salt);
    console.log(salt);

    const data = {
        email: req.body.email,
        password: passwordHash.passwordHash,
        registered_at: currentDate,
        salt: passwordHash.salt
    };
    console.log(data.email);
    User.register(data)
        .then(result => {
            helper.response(res, result);
            console.log("New user has been registered");
        })
        .catch(error => {
            console.log(error);
            helper.response(res, error, 500, "Oops something went wrong!");
        });
};

exports.loginUser = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getByEmail(email).then(result => {
        const userData = result[0]
        const userPassword = helper.setPassword(password, userData.salt).passwordHash

        if (userPassword === userData.password) {
            userData.token = jwt.sign({
                email: userData.email,
                id: userData.id
            }, process.env.SECRET_KEY, {
                expiresIn: '1200s'
            })

            delete userData.salt;
            delete userData.password;
            return helper.response(res, userData)
        } else {
            return helper.response(res, null, 403, "Wrong Password Or Email")
        }
    }).catch(error => {
        console.log(error)
        return response.response(res, null, 404, "Email is not registered")
    })
}