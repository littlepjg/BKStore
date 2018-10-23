const db = require('../common/database');

const conn = db.getConnection();

const addUser = (user, callback) => {
    conn.query("INSERT INTO users SET ?", user, callback);
}

const getUserByEmail = (email, callback) => {
    conn.query("SELECT * FROM users WHERE email=?", [email], callback);
}

const getUserById = (id, callback) => {
    conn.query("SELECT * FROM users WHERE id=?", [id], callback);
}

const getUserByPage = (limit, noPerPage, searchValue, callback) => {
    let sql, params;
    if (!searchValue) {
        sql = "SELECT * FROM users  WHERE level = ? limit ?, ?";
        params = [1, limit, noPerPage];
    } else {
        sql = "SELECT * FROM users  WHERE level = ? AND email LIKE ? limit ?, ?";
        params = [1, `%${searchValue}%`, limit, noPerPage];
    }
    conn.query(sql, params, callback);
}

const getTotalUser = (searchValue, callback) => {
    let sql, params;
    if (!searchValue) {
        sql = "SELECT count(id) as totalUser FROM users WHERE level = ?";
        params = [1];
    } else {
        sql = "SELECT count(id) as totalUser FROM users WHERE level = ? and email LIKE ?";
        params = [1, `%${searchValue}%`];
    }

    conn.query(sql, params, callback);
}

const deleteUserById = (id, callback) => {
    conn.query("DELETE FROM users WHERE id = ?", [id], callback);
}

module.exports = {
    addUser,
    getUserByEmail,
    getUserById,
    getUserByPage,
    deleteUserById,
    getTotalUser
}