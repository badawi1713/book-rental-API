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
            return helper.response(res, "Sorry you are Unauthorized", [], 401, true);
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
        jwt.verify(accessToken, secretKey, (error, decode) => {
            if (error && error.name === "TokenExpired")
                return helper.response(res, null, 402, "Token Expired");

            if (error && error.name === "JsonWebTokenError")
                return helper.response(res, null, 402, "Invalid Token");

            if (parseInt(userToken) !== parseInt(decode.id))
                //
                return helper.response(res, null, 402, "Invalid User Token");
        });
        next()
    }
};