const Book = require("../model/book_Model");
const helper = require("../helpers/response");
// const moment = require("moment");

exports.getAllBooks = (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search || ''
  const sortBy = req.query.sortBy || 'title'
  const sort = req.query.sort || 'DESC'
  const limit = req.query.limit || 10
  const offset = (page - 1) * limit

  Book.getBooksCount().then(result => {
    let total = result[0].TotalBooks
    console.log('total books:', total);
    const prevPage = page === 1 ? 1 : page - 1;
    const nextPage = page === total ? total : page + 1;
    Book.getAllBooks(search, sortBy, sort, offset, limit)
      .then(data => {
        //   res.json(result);
        let pageDetail = {
          total: Math.ceil(total),
          per_page: limit,
          current_page: page,
          nextLink: `http://localhost:8080${req.originalUrl.replace('page=' + page, 'page=' + nextPage)}`,
          prevLink: `http://localhost:8080${req.originalUrl.replace('page=' + page, 'page=' + prevPage)}`
        }
        if (data[1] === undefined) {
          helper.responsePagination(res, 'Data is not found', 404, true, pageDetail, data)
        } else {
          helper.responsePagination(res, 'OK', 200, false, pageDetail, data)
        }
      })
      .catch(error => {
        helper.response(res, null, 404, "Data is not found");
        console.log(error);
      });
  }).catch(error => {
    helper.response(res, null, 404, "Data is not found");
    console.log(error);
  });
};

// exports.getAllBooks = async (req, res, next) => {
//   const page = parseInt(req.query.page) || 1
//   const search = req.query.search || ''
//   const sortBy = req.query.sortBy || 'title'
//   const sort = req.query.sort || 'DESC'
//   const limit = req.query.limit || 10
//   const offset = (page - 1) * limit

//   try {
//     const total = await Book.getBooksCount()
//     const prevPage = page === 1 ? 1 : page - 1
//     const nextPage = page === total[0].total ? total[0].total : page + 1
//     const data = await Book.getAllBooks(search, sortBy, sort, offset, limit)

//     let pageDetail = {
//       total: Math.ceil(total[0].total),
//       per_page: limit,
//       current_page: page,
//       nextLink: `http://localhost:8080${req.originalUrl.replace('page=' + page, 'page=' + nextPage)}`,
//       prevLink: `http://localhost:8080${req.originalUrl.replace('page=' + page, 'page=' + prevPage)}`
//     }

//     helper.response(res, 200, null, 'Successfull get all data', pageDetail, data, req.originalUrl);
//   } catch (error) {
//     console.error(error)
//     helper.response(res, null, 404, "Data is not found")
//   }
// }

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

exports.getSortBookByTitle = (req, res, next) => {
  Book.sortBookByTitle()
    .then(result => {
      helper.response(res, result, 200, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });
};

exports.getSortBookByDate = (req, res, next) => {
  Book.sortBookByDate()
    .then(result => {
      helper.response(res, result, 200, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });
};

exports.getSortBookByGenre = (req, res, next) => {
  Book.sortBookByGenre()
    .then(result => {
      helper.response(res, result, 200, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });
};

exports.getSortBookByAvailable = (req, res, next) => {
  Book.sortBookByAvailable()
    .then(result => {
      helper.response(res, result, 200, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });
};

exports.getSearchBookByTitle = (req, res, next) => {
  let title = req.query.title;
  console.log(title);
  Book.searchBookTitle(title)
    .then(result => {
      helper.response(res, result, 200, null);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });
};

exports.getBookPagination = (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  const offset = (page - 1) * limit
  Book.getBookPagination(offset, limit).then(result => {
    helper.response(res, result, 200);
  }).catch(error => {
    console.log(error)
    helper.response(res, error, 500, "Server Error");
  })
}