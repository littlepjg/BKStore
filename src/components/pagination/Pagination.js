import React, { Component } from 'react';
import styled from 'styled-components';

const PagContainer = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
    justify-content: space-between;
    float: right;
    padding-bottom: 35px;

    ul {
        margin-left: 45px;
    }

    button {
        position: relative;
        float: left;
        padding: 6px 12px;
        margin-left: -1px;
        line-height: 1.42857143;
        color: #337ab7;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd;
    }

    li:first-child>button {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    li:last-child>button {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;

const PaginateButton = ({ disabled, onClick, children }) => {
    return <button onClick={onClick} disabled={disabled} style={disabled ? styles.cursorDisabled : styles.cursorPointer}>{children}</button>
}

const styles = {
    cursorDisabled: {
        cursor: "not-allowed"
    },
    cursorPointer: {
        cursor: "pointer"
    }
}

class Pagination extends Component {
    render() {
        const { currentPage, total, noPerPage } = this.props;
        let prevAbled = currentPage > 1;
        let nextAbled = currentPage * noPerPage < total;
        let maxPosUser = currentPage * noPerPage;
        return (
            <PagContainer>
                <div>Showing {total > 0 ? maxPosUser - noPerPage + 1 : 0} to {maxPosUser <= total ? maxPosUser : total - maxPosUser + currentPage * noPerPage} of {total} entries</div>
                <ul className="pagination">
                    <li><PaginateButton onClick={this.props.getPrevPage} disabled={!prevAbled}>Previous</PaginateButton></li>
                    <li className="paginate_button active"><span>{currentPage}</span></li>
                    <li><PaginateButton onClick={this.props.getNextPage} disabled={!nextAbled}>Next</PaginateButton></li>
                </ul>
            </PagContainer>
        );
    }
}

export default Pagination;