const db = require('../common/database');

const conn = db.getConnection();

const addUser = user => {
    return new Promise((resolve, reject) => {
        conn.query("INSERT INTO users SET ?", user, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

const getUserByEmail = email => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM users WHERE email=?", [email], (err, users) => {
            if (err) reject(err);
            else resolve(users);
        });
    });
}

const getUserByPage = (limit, noPerPage) => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM users  WHERE level = ? limit ?, ?", [1, limit, noPerPage], (err, users) => {
            if (err) reject(err);
            else resolve(users);
        });
    });
}

const getTotalUser = () => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT count(id) as totalUser FROM users WHERE level = ?", [1], (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

const deleteUserById = (id) => {
    return new Promise((resolve, reject) => {
        conn.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

module.exports = {
    addUser,
    getUserByEmail,
    getUserByPage,
    deleteUserById,
    getTotalUser
}