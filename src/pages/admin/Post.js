import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-wrapper';

const initialState = {
    bio: '',
    selectedFile: {},
    newFile: '',
    error: ''
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }

    handleEditorChange(bio) {
        this.setState({
            bio
        });
    }

    render() {
        const { bio } = this.state;
        return (
            <div>
                <h1>Demo cheditor</h1>
                <CKEditor value={bio}
                    onChange={this.handleEditorChange.bind(this)}
                    config={{ extraAllowedContent: 'div(*); p(*); strong(*);' }} />
            </div>
        );
    }
}

export default Post;