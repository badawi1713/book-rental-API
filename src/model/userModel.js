const connection = require("../config/dbConnection");

module.exports = {
  register: data => {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO users SET ?`, [data], (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  getAllUser: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  getByEmail: email => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT id, email, fullname, password, salt from users WHERE email = ?",
        [email],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  }
};
