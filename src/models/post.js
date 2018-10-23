const db = require('../common/database');

const conn = db.getConnection();

const addPost = (post, callback) => {
    conn.query("INSERT INTO posts SET ?", post, callback);
}

const updatePost = (post, callback) => {
    conn.query("UPDATE posts SET title = ?, content = ?, updated_at = ? WHERE id = ?", [post.title, post.content, new Date(), post.id], callback);
}

const getPostById = (id, callback) => {
    conn.query("SELECT * FROM posts WHERE id=?", [id], callback);
}

const getPostByPage = (limit, noPerPage, callback) => {
    conn.query("SELECT * FROM posts limit ?, ?", [limit, noPerPage], callback);
}

const getTotalPost = (callback) => {
    conn.query("SELECT count(id) as totalPost FROM posts", callback);
}

const deletePost = (id, callback) => {
    conn.query("DELETE FROM posts WHERE id = ?", [id], callback);
}

module.exports = {
    addPost,
    getPostById,
    updatePost,
    getPostByPage,
    getTotalPost,
    deletePost
}