import React, { Component } from 'react';
import styled from 'styled-components';
import * as pathParse from 'path-parse';

const Container = styled.div`
    padding: 10px 15px;
    border: 1px solid #e5e5e5;
`;

class ItemImageAdd extends Component {
    render() {
        let { file } = this.props;
        // console.log("parse: ", parse);
        // file['newName'] = file.name.replace(/\.[^/.]+$/, "");
        file['newName'] = pathParse(file.name).name;
        return (
            <Container className="col-xs-6 col-sm-3 col-md-4 col-lg-3">
                <img src={window.URL.createObjectURL(file)} className="img-responsive" alt="item-photo" />

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={file.newName} />
                </div>

                <button type="button" className="btn btn-danger" onClick={() => this.props.deleteImage(this.props.pos)}>Remove</button>
            </Container>
        );
    }
}

export default ItemImageAdd;