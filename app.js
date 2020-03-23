const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");

// database connection
// const db = require("./src/config/db_connection");
const port = 3001;

// body parser buat menerima request dari client
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(logger("dev"));

// registered router
const book_router = require("./src/routes/bookRouter");
const genre_router = require("./src/routes/genreRouter");
const user_router = require("./src/routes/userRouter");

app.use("/api/v1/books", book_router);
app.use("/api/v1/users", user_router);
app.use("/api/v1/genres", genre_router);

// start server
app.listen(port, () => {
  console.log("Server run on localhost:" + port);
});
