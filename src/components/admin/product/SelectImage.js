import React, { Component } from 'react';
import styled from 'styled-components';
import ItemImageAdd from './ItemImageAdd';

const Container = styled.div`
    input[type=file] {
        display: none;
    }

    h3 {
        font-size: 21px;
        width: max-content;
        padding-bottom: 5px;
        border-bottom: 1px solid #e5e5e5;
    }
`;

class SelectImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
        this.handleSelectImage = this.handleSelectImage.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }

    deleteImage(index) {
        this.setState(({ files }) => {
            files.splice(index, 1);
            return { files }
        })
    }

    handleSelectImage(e) {
        let { files } = this.state;
        let fileSelected = e.target.files;
        Object.keys(fileSelected).forEach(key => {
            files.push(fileSelected[key]);
        });
        this.setState({ files });
    }

    render() {
        const { files } = this.state;

        return (
            <Container className="col-md-6">
                <legend>Images</legend>
                <label htmlFor="upload-photo"><span className="fa fa-plus btn btn-primary"> Select files</span></label>
                <input type="file" multiple accept="image/*" id="upload-photo" onChange={this.handleSelectImage} />
                <h3>Overview image</h3>
                <div className="row">
                    {files.map((file, index) => <ItemImageAdd key={index} file={file} pos={index} deleteImage={this.deleteImage} />)}
                </div>
            </Container>
        );
    }
}

export default SelectImage;