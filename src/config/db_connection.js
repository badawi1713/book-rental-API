require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST, //domain localhost
  user: process.env.DB_USER, //nama user sql GUI
  password: process.env.DB_PASSWORD, //password sql GUI
  database: process.env.DB_NAME // nama database yang dihubungkan
});

// menghubungkan server dengan mysql db
connection.connect(error => {
  if (error) {
    console.log(error);
  }
  // console.log(process.env.DB_HOST, process.env.DB_NAME)
  console.log("MySQL Database connection is established");
});

module.exports = connection;
