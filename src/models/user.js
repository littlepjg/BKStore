const db = require('../common/database');

const conn = db.getConnection();

const addUser = user => {
    return new Promise((resolve, reject) => {
        conn.query("INSERT INTO users SET ?", user, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
}

const getUserByEmail = email => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM users WHERE email=?", [email], (err, users) => {
            if(err) reject(err);
            else resolve(users);
        });
    });
}

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM users", (err, users) => {
            if(err) reject(err);
            else resolve(users);
        });
    });
}

module.exports = {
    addUser,
    getUserByEmail,
    getAllUsers
}