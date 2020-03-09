const Genre = require("../model/genre_Model");
const helper = require("../helpers/response");

exports.getAllGenre = (req, res, next) => {
    Genre.getAllGenre()
        .then(result => {
            console.log(result);
            helper.response(res, "List of all genre", result, 200, false);
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
            console.log(result);
            helper.response(res, "New Genre is Created", result, 201, false);
        })
        .catch(error => {
            console.log(error);
            helper.response(res, "Oops something went wrong!", error, 401, true);
        });
};

exports.editGenreData = (req, res, next) => {
    const id = req.params.id;
    const newData = req.body.name;
    Genre.editGenreData(newData, id).then(result => {
        helper.response(res, `Genre with id: ${id} is updated`, result, 200, false);
    }).catch(error => {
        console.log(error)
        helper.response(res, "Oops something went wrong!", error, 401, true);
    });
};

exports.deleteGenreData = (req, res, next) => {
    const id = req.params.id;
    Genre.deleteGenreData(id).then(result => {
        helper.response(res, `Genre with id: ${id} is deleted`, result, 200, false);
    }).catch(error => {
        console.log(error)
        helper.response(res, "Data is not found", error, 404, true);
        // helper.response(res, error, 404, "Oops something went wrong!");
    });
}