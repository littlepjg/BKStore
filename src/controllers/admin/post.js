const express = require("express");
const config = require('config');
const post_md = require('../../models/post');

const route = express.Router();

const noPerPage = config.get('noPerPage');

route.get('/pages/:page', (req, res) => {
    let page = parseInt(req.params.page);
    let limit = (page - 1) * noPerPage;

    let message = {
        success: true,
        error: '',
        totalPost: 0,
        posts: [],
    }

    post_md.getTotalPost().then(
        data => {
            let totalPost = data[0].totalPost;
            message.totalPost = totalPost;
            if (totalPost > 0) {
                if (limit < totalPost) {
                    post_md.getPostByPage(limit, noPerPage).then(
                        posts => {
                            message.posts = [...posts];
                            res.json(message);
                        }
                    ).catch(
                        err => {
                            console.log(err);
                            message.error = "Có lỗi xảy ra với CSDL";
                            res.json(message);
                        }
                    )
                } else {
                    message.error = "404";
                    res.json(message);
                }
            } else {
                message.error = "Dữ liệu bài viết trống";
                res.json(message);
            }
        }
    ).catch(
        err => {
            console.log(err);
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    );
});

route.get("/getPost/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let message = {
        success: true,
        error: '',
        post: null,
    }

    post_md.getPostById(id).then(
        posts => {
            if (posts.length > 0) {
                message.post = posts[0];
                res.json(message);
            } else {
                message.error = "Không tìm thấy bài viết";
                res.json(message);
            }
        }
    ).catch(
        err => {
            console.log(err);
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message)
        }
    )
});

route.post("/new", (req, res) => {
    let post = req.body;
    let message = {
        success: true,
        error: ''
    }

    post.created_at = new Date();
    post.updated_at = new Date();

    post_md.addPost(post).then(
        result => {
            res.json(message);
        }
    ).catch(
        err => {
            console.log(err);
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    );
});

route.post("/update", (req, res) => {
    let post = req.body;
    let message = {
        success: true,
        error: ''
    }

    post_md.updatePost(post).then(
        result => {
            res.json(message);
        }
    ).catch(
        err => {
            console.log(err);
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    );
});

route.post('/delete', (req, res) => {
    const { id } = req.body;
    let message = {
        success: true,
        error: '',
    }

    post_md.deletePost(id).then(
        result => {
            if (result.affectedRows > 0) {
                message.status = "Xóa thành công";
            } else {
                message.error = "Bài viết không tồn tại";
            }
            res.json(message);
        }
    ).catch(
        err => {
            message.error = "Có lỗi xảy ra với CSDL";
            res.json(message);
        }
    );
})

module.exports = route;