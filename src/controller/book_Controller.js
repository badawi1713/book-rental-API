const Book = require("../model/book_Model");
const helper = require("../helpers/response");
// const moment = require("moment");

exports.getAllBooks = (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search || ''
  const sortBy = req.query.sortBy || 'id'
  const sort = req.query.sort || 'ASC'
  const limit = parseInt(req.query.limit) || 10
  const offset = (page - 1) * limit

  Book.getBooksCount().then(result => {
    let total = result[0].TotalBooks
    // console.log('total books:', total);

    Book.getAllBooks(search, sortBy, sort, offset, limit)
      .then(data => {
        //   res.json(result);
        const prevPage = page === 1 ? 1 : page - 1;
        const nextPage = page === total ? total : page + 1;
        let pageDetail = {
          total: total,
          per_page: limit,
          current_page: page,
          nextLink: `http://localhost:3001${req.originalUrl.replace('page=' + page, 'page=' + nextPage)}`,
          prevLink: `http://localhost:3001${req.originalUrl.replace('page=' + page, 'page=' + prevPage)}`
        }
        if (data[0] !== undefined) {
          helper.responsePagination(res, 'OK', 200, false, pageDetail, data)
        } else {
          helper.responsePagination(res, 'Data is not found', 404, true, pageDetail, data)
        }
        // console.log(data[0])
      })
      .catch(error => {
        helper.response(res, null, 404, "Data is not found", error);
        console.log(error);
      });
  }).catch(error => {
    helper.response(res, null, 404, "Data is not found");
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
    available: req.body.available,
    genre: req.body.genre
    // timestamp: currentDate
  };
  Book.addNewBook(bookData)
    .then(result => {
      console.log(result);
      console.log("Data has been added!");
      helper.response(res, result, 201, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
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
    genre: req.body.genre
  };
  Book.editBookData(newData, id)
    .then(result => {
      if (result.affectedRows === 0) {
        helper.response(res, result, 404, "Data is not found");
      } else {
        // console.log(result);
        console.log(`Data with id ${id} has been changed!`);
        helper.response(res, result, 200, null);
      }
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });

};

exports.deleteBookData = (req, res, next) => {
  const id = req.params.id;
  Book.deleteBookData(id)
    .then(result => {
      console.log(result);
      console.log(`Book with ${id} has been deleted`);
      helper.response(res, result, 200, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });

};

exports.getBookDataByID = (req, res, next) => {
  const id = req.params.id;
  Book.getBookByID(id)
    .then(result => {
      console.log(result);
      helper.response(res, result, 200, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });

};

exports.rentBook = (req, res, next) => {
  // let requireCheck = [];
  // !available ? requireCheck.push('available in body is required') : '';
  // if (requireCheck.length) {
  //   return helper.response(res, error, 400, "Error");
  // }
  const id = req.params.id;
  Book.getBookByID(id).then(result => {
    console.log(result[0].available)
    if (result[0].available !== "false") {
      const available = req.body.available;
      Book.rentBook(available, id).then((result) => {
          console.log(result);
          helper.response(res, result, 200, null);
        })
        .catch((error) => {
          helper.response(res, null, 500, "Server Error");
          console.log(error);
        })
    } else {
      helper.response(res, "You cannot rent this book!", result, 200, null);
      console.log('You cannot rent this book!')
    }
  }).catch(error => {
    console.log(error)
    helper.response(res, null, 500, "Server Error");
  })


};

exports.returnBook = (req, res, next) => {
  // let requireCheck = [];
  // !available ? requireCheck.push('available in body is required') : '';
  // if (requireCheck.length) {
  //   return helper.response(res, error, 400, "Error");
  // }
  const id = req.params.id;
  Book.getBookByID(id).then(result => {
    // console.log(result[0].available)
    if (result[0].available !== "true") {
      const available = req.body.available;
      Book.returnBook(available, id).then((result) => {
          console.log(result);
          helper.response(res, result, 200, null);
        })
        .catch((error) => {
          helper.response(res, null, 500, "Server Error");
          console.log(error);
        })
    } else {
      helper.response(res, "Book is still available", result, 200, null);
      console.log('Book is still available')
    }
  }).catch(error => {
    console.log(error)
  })


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