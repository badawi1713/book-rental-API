const jwt = require("jsonwebtoken");
const helper = require("./response");
const allowedAccess = process.env.REQUEST_HEADERS;

module.exports = {
    authInfo: (req, res, next) => {
        //digunakan untuk autentikasi
        const headerAuth = req.headers["authorization"];
        const headerSecret = req.headers["x-token"]; //header secret digunakan untuk ???
        // console.log(headerAuth);
        // console.log(headerSecret)
        if (headerAuth !== allowedAccess) {
            console.log(allowedAccess);
            return helper.response(res, "Sorry you are Unauthorized", null, 401, true);
        } else if (typeof headerSecret === "undefined") {
            next();
        } else {
            const bearerToken = headerSecret.split(" ");
            const token = bearerToken[1];
            req.token = token;
            // console.log('bearer token', token)
            next();
            // console.log(req.token)
        }
    },
    accessToken: (req, res, next) => {
        //membutuhkan secret_key,
        const secretKey = process.env.SECRET_KEY;
        const accessToken = req.token;
        const userToken = req.headers["user-token"];
        console.log('access token:', accessToken)
        console.log(userToken)
        console.log(secretKey)
        if (userToken === undefined) {
            return helper.response(res, "User-token header is undefined", null, 400, true);
        }

        jwt.verify(accessToken, secretKey, (error, decode) => {
            if (decode.id === undefined) {
                return helper.response(res, "Please login first", null, 401, true);
            }
            if (error && error.name === "TokenExpired")
                return helper.response(res, "Token is expired", null, 400, true);

            if (error && error.name === "JsonWebTokenError")
                return helper.response(res, "Invalid token", null, 400, true);

            if (parseInt(userToken) !== parseInt(decode.id))
                return helper.response(res, "Invalid user token", null, 400, true);
        });
        next()
    }
};