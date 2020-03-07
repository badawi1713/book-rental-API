const connection = require('../config/db_connection')

module.exports = {
    register: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO user SET ?`, [data], (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT id, email, password, salt from user WHERE email = ?', [email], (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}