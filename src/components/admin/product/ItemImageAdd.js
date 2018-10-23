import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px 15px;
    border: 1px solid #e5e5e5;
`;

class ItemImageAdd extends Component {
    render() {
        const { file } = this.props;
        return (
            <Container className="col-xs-6 col-sm-3 col-md-4 col-lg-3">
                <img src={window.URL.createObjectURL(file)} className="img-responsive" alt="item-photo" />

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={file.name} />
                </div>

                <button type="button" className="btn btn-danger">Remove</button>
            </Container>
        );
    }
}

export default ItemImageAdd;