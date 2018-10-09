import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-wrapper';

const initialState = {
    bio: '',
    selectedFile: {},
    newFile: '',
    error: ''
}

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEditorChange(bio) {
        console.log("bio: ", bio);
        this.setState({
            bio
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("adding new post");
    }

    render() {
        const { bio } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <legend>Add new post</legend>

                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" id="title" placeholder="Title" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Content:</label>
                        <CKEditor value={bio}
                            onChange={this.handleEditorChange}
                            config={{ extraAllowedContent: 'div(*); p(*); strong(*);' }} />
                    </div>

                    <button type="submit" className="btn btn-success">Add</button>
                </form>


            </div>
        );
    }
}

export default NewPost;