const express = require("express");
const config = require('config');
const post_md = require('../../models/post');

const route = express.Router();

const noPerPage = config.get('noPerPage');

route.get('/pages/:page', (req, res) => {
    let page = parseInt(req.params.page);
    let limit = (page - 1) * noPerPage;

    post_md.getTotalPost((err, data) => {
        if (err) {
            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
        } else {
            let totalPost = data[0].totalPost;
            if (totalPost > 0) {
                if (limit < totalPost) {
                    post_md.getPostByPage(limit, noPerPage, (err, posts) => {
                        if (err) {
                            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
                        } else {
                            res.json({ success: true, error: '', totalPost, posts: [...posts] });
                        }
                    });
                } else {
                    res.json({ success: false, error: 'Không tìm thấy bài viết' });
                }
            } else {
                res.json({ success: false, error: 'Không tìm thấy bài viết' });
            }
        }
    });
});

route.get("/getPost/:id", (req, res) => {
    let id = parseInt(req.params.id);

    post_md.getPostById(id, (err, posts) => {
        if (err) {
            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
        } else {
            if (posts.length > 0) {
                res.json({ success: true, error: '', post: posts[0] });
            } else {
                res.json({ success: false, error: 'Không tìm thấy bài viết' });
            }
        }
    });
});

route.post("/new", (req, res) => {
    let post = req.body;

    post.created_at = new Date();
    post.updated_at = new Date();

    post_md.addPost(post, (err, result) => {
        if (!err) {
            res.json({ success: true, error: '' });
        } else {
            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
        }
    });
});

route.post("/update", (req, res) => {
    let post = req.body;

    post_md.updatePost(post, (err, result) => {
        if (!err) {
            res.json({ success: true, error: '' });
        } else {
            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
        }
    });
});

route.post('/delete', (req, res) => {
    const { id } = req.body;

    post_md.deletePost(id, (err, result) => {
        if (!err) {
            if (result.affectedRows > 0) {
                res.json({ success: true, error: '', status: 'Xóa thành công' });
            } else {
                res.json({ success: false, error: 'Bài viết không tồn tại' });
            }
        } else {
            res.json({ success: false, error: 'Có lỗi xảy ra với CSDL' });
        }
    });
})

module.exports = route;