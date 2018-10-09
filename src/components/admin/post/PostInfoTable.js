import React, { Component } from 'react';
import PostRow from './PostRow';
const posts = [
    {
        pos: 1,
        id: 1,
        title: "post1",
        content: "<p>Content</p>",
        linkto: "https://github.com/simpletut/Universal-React-Apollo-Registration"
    },
    {
        pos: 2,
        id: 2,
        title: "post2",
        content: "<p>Content</p>",
        linkto: "https://github.com/simpletut/Universal-React-Apollo-Registration"
    },
    {
        pos: 3,
        id: 3,
        title: "post3",
        content: "<p>Content</p>",
        linkto: "https://github.com/simpletut/Universal-React-Apollo-Registration"
    },
    {
        pos: 4,
        id: 4,
        title: "post4",
        content: "<p>Content</p>",
        linkto: "https://github.com/simpletut/Universal-React-Apollo-Registration"
    }
]
class PostInfoTable extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Link To</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => <PostRow post={post} key={post.id} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PostInfoTable;