const connection = require("../config/dbConnection");

module.exports = {
  // GET BOOKS DATA * COUNT
  getBooksCount: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) as TotalBooks FROM books`,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  // GET ALL BOOKS DATA
  getAllBooks: (search, sortBy, sort, offset, limit) => {
    // console.log(sortBy);
    // console.log(sort);
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT b.*, g.name as genre FROM books b INNER JOIN genres g ON b.id_genre = g.id WHERE title LIKE CONCAT('%',?,'%') ORDER BY ${sortBy} ${sort} LIMIT ?, ?`,
        [search, offset, limit],
        (error, result) => {
          if (!error) {
            // console.log(result)
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  // ADD NEW BOOK
  addNewBook: bookData => {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO books SET ?`,
        [bookData],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  // EDIT BOOK'S DATA
  editBookData: (bookData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE books SET ? WHERE id = ?`,
        [bookData, id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  // DELETE BOOK'S DATA
  deleteBookData: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM books WHERE id = ?`,
        [id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  // GET BOOK'S DATA BY ID
  getBookByID: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT b.*, g.name as genre FROM books b INNER JOIN genres g ON b.id_genre = g.id WHERE b.id = ?`,
        [id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  // RENT BOOK DATA (AVAILABLE)
  rentBook: (available, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE books SET available = ? WHERE id = ?`,
        [available, id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  // RETURN BOOK DATA (AVAILABLE)
  returnBook: (available, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE books SET available = ? WHERE id = ?`,
        [available, id],
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
