import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-wrapper';

class CUPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            content: '',
            error: '',
            newPost: this.props.newPost
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.newPost) {
            let id = parseInt(this.props.match.params.id.slice(1));
            fetch(`/admin/post/getPost/${id}`).then(
                res => res.json()
            ).then(
                json => {
                    const { success, error } = json;
                    if (success && !error) {
                        console.log(json);
                        this.setState({ id, title: json.post.title, content: json.post.content });
                    }
                }
            );
        }
    }

    handleEditorChange(content) {
        this.setState({
            content
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { id, title, content, newPost } = this.state;
        let post = {
            title,
            content
        }

        let api;
        if (newPost) {
            api = '/admin/post/new';
        } else {
            api = '/admin/post/update';
            post.id = id;
            console.log("id: ", post.id);
        };

        this.changePost(api, post);
    }

    changePost(api, post) {
        fetch(api, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(post),
        }).then(
            res => res.json()
        ).then(
            json => {
                const { success, error } = json;
                if (success) {
                    console.log(json);
                    this.setState({ error })
                }
            }
        );
    }

    render() {
        const { title, content, newPost } = this.state;
        console.log("prop: ", this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <legend>{newPost ? "Add new post" : "Update post"}</legend>

                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" id="title" placeholder="Title"
                            value={title} onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Content:</label>
                        <CKEditor value={content}
                            onChange={this.handleEditorChange}
                            config={{ extraAllowedContent: 'div(*); p(*); strong(*);' }} />
                    </div>

                    <button type="submit" className="btn btn-success">{newPost ? "Add" : "Update"}</button>
                </form>
            </div>
        );
    }
}

export default CUPost;