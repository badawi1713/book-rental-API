const Genre = require("../model/genreModel");
const helper = require("../helpers/response");

exports.getAllGenre = (req, res, next) => {
  Genre.getAllGenre()
    .then(data => {
      console.log(data);
      helper.response(res, "List of all genre data", data, 200, false);
    })
    .catch(error => {
      console.log(error);
      helper.response(res, error, 404, "Data is not found");
    });
};

exports.addNewGenre = (req, res, next) => {
  let data = {
    name: req.body.name
  };
  Genre.postNewGenre(data)

    .then(result => {
      const getResultData = {
        id: result.insertId,
        name: req.body.name
      };
      console.log(result);
      helper.response(
        res,
        "New genre is successfully created",
        getResultData,
        201,
        false
      );
    })
    .catch(error => {
      console.log(error);
      helper.response(res, "Oops something went wrong!", error, 401, true);
    });
};

exports.editGenreData = (req, res, next) => {
  const id = req.params.id;
  const newData = req.body.name;
  Genre.editGenreData(newData, id)
    .then(result => {
      const getDataResult = {
        id: req.params.id,
        name: req.body.name
      };
      if (result.affectedRows === 0) {
        helper.response(
          res,
          `Genre with id: ${id} is not found`,
          ["Fail to update, data is not found"],
          404,
          true
        );
      } else {
        // console.log(result);
        console.log(`Data with id ${id} has been changed!`);
        helper.response(
          res,
          `Genre with id: ${id} is successfully updated`,
          getDataResult,
          200,
          false
        );
      }
    })
    .catch(error => {
      console.log(error);
      helper.response(res, "Oops something went wrong!", error, 401, true);
    });
};

exports.deleteGenreData = (req, res, next) => {
  const id = req.params.id;
  Genre.getGenreByID(id)
    .then(data => {
      const getDataResult = data[0];
      Genre.deleteGenreData(id)
        .then(result => {
          if (result.affectedRows === 0) {
            console.log(`Genre with id: ${id} is not found`);
            helper.response(
              res,
              `Genre with id: ${id} is not found`,
              ["data is not found"],
              404,
              true
            );
          } else {
            console.log(`Genre with ${id} has been deleted`);
            helper.response(
              res,
              `Genre with id: ${id} is successfully deleted`,
              getDataResult,
              200,
              false
            );
          }
        })
        .catch(error => {
          console.log(error);
          helper.response(res, "Data is not found", error, 404, true);
          // helper.response(res, error, 404, "Oops something went wrong!");
        });
    })
    .catch(error => {
      console.log(error);
      helper.response(res, "Data is not found", error, 404, true);
      // helper.response(res, error, 404, "Oops something went wrong!");
    });
};
