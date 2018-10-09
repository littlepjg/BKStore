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

const getUserByPage = (limit, noPerPage, searchValue) => {
    return new Promise((resolve, reject) => {
        let sql, params;
        if (!searchValue) {
            sql = "SELECT * FROM users  WHERE level = ? limit ?, ?";
            params = [1, limit, noPerPage];
        } else {
            sql = "SELECT * FROM users  WHERE level = ? AND email LIKE ? limit ?, ?";
            params = [1, `%${searchValue}%`, limit, noPerPage];
        }
        conn.query(sql, params, (err, users) => {
            if (err) reject(err);
            else resolve(users);
        });
    });
}

const getTotalUser = (searchValue) => {
    return new Promise((resolve, reject) => {
        let sql, params;
        if (!searchValue) {
            sql = "SELECT count(id) as totalUser FROM users WHERE level = ?";
            params = [1];
        } else {
            sql = "SELECT count(id) as totalUser FROM users WHERE level = ? and email LIKE ?";
            params = [1, `%${searchValue}%`];
        }

        conn.query(sql, params, (err, data) => {
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