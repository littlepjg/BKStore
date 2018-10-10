const db = require('../common/database');

const conn = db.getConnection();

const addPost = post => {
    return new Promise((resolve, reject) => {
        conn.query("INSERT INTO posts SET ?", post, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

const updatePost = post => {
    return new Promise((resolve, reject) => {
        conn.query("UPDATE posts SET title = ?, content = ?, updated_at = ? WHERE id = ?", [post.title, post.content, new Date(), post.id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

const getPostById = id => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM posts WHERE id=?", [id], (err, posts) => {
            if (err) reject(err);
            else resolve(posts);
        });
    });
}

const getPostByPage = (limit, noPerPage) => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM posts limit ?, ?", [limit, noPerPage], (err, posts) => {
            if (err) reject(err);
            else resolve(posts);
        });
    });
}

const getTotalPost = () => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT count(id) as totalPost FROM posts", (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

const deletePost = (id) => {
    return new Promise((resolve, reject) => {
        conn.query("DELETE FROM posts WHERE id = ?", [id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

module.exports = {
    addPost,
    getPostById,
    updatePost,
    getPostByPage,
    getTotalPost,
    deletePost
}