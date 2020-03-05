const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");

// database connection
// const db = require("./src/config/db_connection");
const port = 8080;

// body parser buat menerima request dari client

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// registered router
const admin_router = require("./src/routes/admin_Router");
app.use("/api/v1/admin", admin_router);

app.use(logger("dev"));
app.listen(port, () => {
    console.log("Server run on localhost:" + port);
});