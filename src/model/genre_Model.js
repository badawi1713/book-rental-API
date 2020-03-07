const connection = require('../config/db_connection');

module.exports = {
    getAllGenre: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM genre ORDER BY id ASC`, (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postNewGenre: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO genre SET ?`, [data], (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    editGenreData: (newData, id) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE genre SET name = ? WHERE id = ?`, [newData, id], (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteGenreData: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM genre WHERE id = ?`, [id], (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
}