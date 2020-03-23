const Book = require("../model/bookModel");
const helper = require("../helpers/response");
// const moment = require("moment");

exports.getAllBooks = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const search = req.query.search || "";
  const sortBy = req.query.sortBy || "id";
  const sort = req.query.sort || "ASC";
  const limit = parseInt(req.query.limit) || 9;
  const offset = (page - 1) * limit;

  Book.getBooksCount()
    .then(result => {
      let total = result[0].TotalBooks;
      // console.log('total books:', total);
      Book.getAllBooks(search, sortBy, sort, offset, limit)
        .then(data => {
          //   res.json(result);
          const prevPage = page === 1 ? 1 : page - 1;
          const nextPage = page === total ? total : page + 1;
          let pageDetail = {
            total: Math.ceil(total),
            per_page: limit,
            current_page: page,
            nextLink: `http://localhost:3001${req.originalUrl.replace(
              "page=" + page,
              "page=" + nextPage
            )}`,
            prevLink: `http://localhost:3001${req.originalUrl.replace(
              "page=" + page,
              "page=" + prevPage
            )}`
          };
          if (data[0] !== undefined) {
            helper.responsePagination(
              res,
              "List of all books",
              200,
              false,
              pageDetail,
              data
            );
          } else {
            helper.responsePagination(
              res,
              "Data is not found",
              404,
              true,
              pageDetail,
              data
            );
          }
          // console.log(data[0])
        })
        .catch(error => {
          helper.response(res, `Data is not found`, error, 404, true);
          console.log(error);
        });
    })
    .catch(error => {
      helper.response(res, `Data is not found`, error, 404, true);
      console.log(error);
    });
};

exports.addNewBook = (req, res, next) => {
  //   let currentDate = moment(new Date(Date.now())).format("L");
  let bookData = {
    title: req.body.title,
    released_date: req.body.released_date,
    imageURL: req.body.imageURL,
    description: req.body.description,
    available: req.body.available || "true",
    id_genre: req.body.genre
    // timestamp: currentDate
  };
  Book.addNewBook(bookData)
    .then(result => {
      console.log(result);
      let data = {
        id: result.insertId,
        title: req.body.title,
        released_date: req.body.released_date,
        imageURL: req.body.imageURL,
        description: req.body.description,
        available: req.body.available,
        id_genre: req.body.genre
      };
      console.log("Data has been added!");
      helper.response(res, `New book data has been added`, data, 201, false);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, `Bad Server`, error, 500, true);
    });
};

exports.editBookData = (req, res, next) => {
  const id = req.params.id;
  const newData = {
    title: req.body.title,
    released_date: req.body.released_date,
    imageURL: req.body.imageURL,
    description: req.body.description,
    available: req.body.available,
    id_genre: req.body.genre
  };
  Book.editBookData(newData, id)
    .then(result => {
      let dataResult = {
        id: req.params.id,
        title: req.body.title,
        released_date: req.body.released_date,
        imageURL: req.body.imageURL,
        description: req.body.description,
        available: req.body.available,
        id_genre: req.body.genre
      };
      if (result.affectedRows === 0) {
        helper.response(
          res,
          `Book with id: ${id} is not found`,
          result,
          404,
          true
        );
      } else {
        // console.log(result);
        console.log(`Data with id ${id} has been changed!`);
        helper.response(
          res,
          `Book with ${id} is successfully updated`,
          dataResult,
          200,
          false
        );
      }
    })
    .catch(error => {
      console.log(error);
      helper.response(res, "Something wrong", 400, error, true);
    });
};

exports.deleteBookData = (req, res, next) => {
  const id = req.params.id;
  Book.getBookByID(id)
    .then(data => {
      // console.log(data[0])
      const getData = data[0];
      Book.deleteBookData(id)
        .then(result => {
          // console.log(getData)
          if (result.affectedRows === 0) {
            console.log(`Book with id: ${id} is not found`);
            helper.response(
              res,
              `Book with id: ${id} is not found`,
              ["data is not found"],
              404,
              true
            );
          } else {
            console.log(`Book with ${id} has been deleted`);
            helper.response(
              res,
              `Book with id: ${id} has been deleted`,
              getData,
              200,
              false
            );
          }
        })
        .catch(error => {
          // console.log(error);
          helper.response(res, "Something wrong", 400, error, true);
        });
    })
    .catch(error => {
      helper.response(res, "Something wrong", 400, error, true);
    });
};

exports.getBookDataByID = (req, res, next) => {
  const id = req.params.id;
  Book.getBookByID(id)
    .then(result => {
      console.log(result);
      helper.response(res, `Get book data with id ${id}`, result, 200, false);
    })
    .catch(error => {
      console.log(error);
      helper.response(
        res,
        `Book with id: ${id} is not found`,
        error,
        404,
        true
      );
    });
};

exports.rentBook = (req, res, next) => {
  const id = req.params.id;
  Book.getBookByID(id)
    .then(result => {
      // console.log(result[0].available)
      const getData = result[0];
      if (result[0].available !== "false") {
        const available = req.body.available;
        Book.rentBook(available, id)
          .then(result => {
            // console.log(result);
            helper.response(
              res,
              `Rent the book with id: ${id} success`,
              getData,
              200,
              false
            );
          })
          .catch(error => {
            helper.response(res, `Bad Server`, error, 500, true);
            console.log(error);
          });
      } else {
        helper.response(res, "Can't rent the book!", result, 200, true);
        console.log("You cannot rent this book!");
      }
    })
    .catch(error => {
      console.log(error);
      helper.response(res, `Bad Server`, error, 500, true);
    });
};

exports.returnBook = (req, res, next) => {
  const id = req.params.id;
  Book.getBookByID(id)
    .then(result => {
      // console.log(result[0].available)
      const getData = result[0];
      if (result[0].available !== "true") {
        const available = req.body.available;
        Book.returnBook(available, id)
          .then(result => {
            console.log(result);
            helper.response(
              res,
              `Returned book with id: ${id} success`,
              getData,
              200,
              false
            );
          })
          .catch(error => {
            helper.response(res, `Bad Server`, error, 500, true);
            console.log(error);
          });
      } else {
        helper.response(
          res,
          `Book with id: ${id} is still available`,
          result,
          200,
          true
        );
        console.log("Book is still available");
      }
    })
    .catch(error => {
      console.log(error);
    });
};

// exports.getSortBookByTitle = (req, res, next) => {
//   Book.sortBookByTitle()
//     .then(result => {
//       helper.response(res, result, 200, null);
//     })
//     .catch(error => {
//       console.log(error);
//       helper.response(res, error, 404, "Data is not found");
//     });
// };

// exports.getSortBookByDate = (req, res, next) => {
//   Book.sortBookByDate()
//     .then(result => {
//       helper.response(res, result, 200, null);
//     })
//     .catch(error => {
//       console.log(error);
//       helper.response(res, error, 404, "Data is not found");
//     });
// };

// exports.getSortBookByGenre = (req, res, next) => {
//   Book.sortBookByGenre()
//     .then(result => {
//       helper.response(res, result, 200, null);
//     })
//     .catch(error => {
//       console.log(error);
//       helper.response(res, error, 404, "Data is not found");
//     });
// };

// exports.getSortBookByAvailable = (req, res, next) => {
//   Book.sortBookByAvailable()
//     .then(result => {
//       helper.response(res, result, 200, null);
//     })
//     .catch(error => {
//       console.log(error);
//       helper.response(res, error, 404, "Data is not found");
//     });
// };

// exports.getSearchBookByTitle = (req, res, next) => {
//   let title = req.query.title;
//   console.log(title);
//   Book.searchBookTitle(title)
//     .then(result => {
//       helper.response(res, result, 200, null);
//     })
//     .catch(error => {
//       console.log(error);
//       helper.response(res, error, 404, "Data is not found");
//     });
// };

// exports.getBookPagination = (req, res, next) => {
//   const page = parseInt(req.query.page) || 1
//   const limit = parseInt(req.query.limit) || 10
//   const offset = (page - 1) * limit
//   Book.getBookPagination(offset, limit).then(result => {
//     helper.response(res, result, 200);
//   }).catch(error => {
//     console.log(error)
//     helper.response(res, error, 500, "Server Error");
//   })
// }
