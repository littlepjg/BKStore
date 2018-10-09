import React, { Component } from 'react';
import $ from 'jquery';
import './pagination.css';

class Pagination extends Component {
    componentDidMount() {
        const { currentPage, total, noPerPage } = this.props;
        let prevAbled = currentPage > 1;
        let nextAbled = currentPage * noPerPage < total;
        if (!prevAbled) {
            $(".paginate_button.previous").addClass("disabled");
        } else {
            $(".paginate_button.previous").removeClass("disabled");
            if (nextAbled) {
                $(".paginate_button.next").removeClass("disabled");
            } else {
                $(".paginate_button.next").addClass("disabled");
            }
        }
    }

    render() {
        const { currentPage, total, noPerPage } = this.props;
        let prevAbled = currentPage > 1;
        let nextAbled = currentPage * noPerPage < total;
        let maxPosUser = currentPage * noPerPage;
        return (
            <div className="div-pagination">
                <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing {maxPosUser - noPerPage + 1} to {maxPosUser <= total ? maxPosUser : total - maxPosUser + currentPage * noPerPage} of {total} entries</div>
                <ul className="pagination">
                    <li className="paginate_button previous" id="example_previous"><button onClick={this.props.getPrevPage} disabled={!prevAbled}>Previous</button></li>
                    <li className="paginate_button active"><span>{currentPage}</span></li>
                    <li className="paginate_button next" id="example_next"><button onClick={this.props.getNextPage} disabled={!nextAbled}>Next</button></li>
                </ul>
            </div>
        );
    }
}

export default Pagination;