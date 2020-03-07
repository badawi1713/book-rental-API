const connection = require("../config/db_connection");

module.exports = {
    // GET BOOKS DATA * COUNT
    getBooksCount: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT COUNT(*) as TotalBooks FROM book`, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },

    // GET ALL BOOKS DATA
    getAllBooks: (search, sortBy, sort, offset, limit) => {
        // console.log(sortBy);
        // console.log(sort);
        return new Promise((resolve, reject) => {
            connection.query(`SELECT b.*, g.name as genre FROM book b INNER JOIN genre g ON b.genre = g.id WHERE title LIKE CONCAT('%',?,'%') ORDER BY ${sortBy} ${sort} LIMIT ?, ?`, [search, offset, limit], (error, result) => {
                if (!error) {
                    // console.log(result)
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },

    // ADD NEW BOOK
    addNewBook: bookData => {
        return new Promise((resolve, reject) => {
            connection.query(
                `INSERT INTO book SET ?`,
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
                `UPDATE book SET ? WHERE id = ?`,
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
                `DELETE FROM book WHERE id = ?`,
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
                `SELECT * FROM book WHERE id = ?`,
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
            connection.query(`UPDATE book SET available = ? WHERE id = ?`, [available, id], (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    // RETURN BOOK DATA (AVAILABLE)
    returnBook: (available, id) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE book SET available = ? WHERE id = ?`, [available, id], (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    // SORT BOOK'S DATA BY TITLE (A-Z)
    // sortBookByTitle: () => {
    //     return new Promise((resolve, reject) => {
    //         connection.query("SELECT * FROM book ORDER BY title", (error, result) => {
    //             if (!error) {
    //                 resolve(result);
    //             } else {
    //                 reject(new Error(error));
    //             }
    //         });
    //     });
    // },

    // SORT BOOK'S DATA BY DATE (NEW-OLD)
    // sortBookByDate: () => {
    //     return new Promise((resolve, reject) => {
    //         connection.query(
    //             "SELECT * FROM book ORDER BY released_date",
    //             (error, result) => {
    //                 if (!error) {
    //                     resolve(result);
    //                 } else {
    //                     reject(new Error(error));
    //                 }
    //             }
    //         );
    //     });
    // },

    // SORT BOOK'S DATA BY GENRE (A-Z)
    // sortBookByGenre: () => {
    //     return new Promise((resolve, reject) => {
    //         connection.query("SELECT * FROM book ORDER BY genre", (error, result) => {
    //             if (!error) {
    //                 resolve(result);
    //             } else {
    //                 reject(new Error(error));
    //             }
    //         });
    //     });
    // },

    // SORT BOOK'S DATA BY AVAILABLE (TRUE-FALSE)
    // sortBookByAvailable: () => {
    //     return new Promise((resolve, reject) => {
    //         connection.query(
    //             "SELECT * FROM book ORDER BY available",
    //             (error, result) => {
    //                 if (!error) {
    //                     resolve(result);
    //                 } else {
    //                     reject(new Error(error));
    //                 }
    //             }
    //         );
    //     });
    // },

    // SEARCH BOOK'S DATA BY TITLE
    // searchBookTitle: title => {
    //     return new Promise((resolve, reject) => {
    //         // let title = req.params.title;
    //         connection.query(
    //             "SELECT * FROM book WHERE title LIKE CONCAT('%',?,'%') LIMIT ?,?",
    //             [title, 0, 10],
    //             (error, result) => {
    //                 if (!error) {
    //                     resolve(result);
    //                 } else {
    //                     reject(new Error(error));
    //                 }
    //             }
    //         );
    //     });
    // },

    //   PAGINATION BOOK'S DATA
    // getBookPagination: (offset, limit) => {
    //     return new Promise((resolve, reject) => {
    //         connection.query(
    //             `SELECT * FROM book LIMIT ?, ?`,
    //             [offset, limit],
    //             (error, result) => {
    //                 if (!error) {
    //                     resolve(result);
    //                 } else {
    //                     reject(new Error(error));
    //                 }
    //             }
    //         );
    //     });
    // }
};