import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/admin_user_action';

import 'react-confirm-alert/src/react-confirm-alert.css';

import { WhitePanel } from '../../theme/Style';
import UserSearch from '../../components/admin/user/UserSearch';
import UserInfoTable from '../../components/admin/user/UserInfoTable';
import Pagination from '../../components/pagination/Pagination';
import MessageDialog from '../../components/dialog/MessageDialog';

class User extends Component {
    constructor(props) {
        super(props);
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
        this.resetError = this.resetError.bind(this);
    }

    getNextPage() {
        const { currentPage, searchValue } = this.props.user;
        this.props.getUsersByPage(currentPage + 1, searchValue);
    }

    getPrevPage() {
        const { currentPage, searchValue } = this.props.user;
        this.props.getUsersByPage(currentPage - 1, searchValue);
    }

    resetError() {
        this.props.resetError();
    }

    componentDidMount() {
        const { currentPage, searchValue } = this.props.user;
        this.props.getUsersByPage(currentPage, searchValue);
    }

    render() {
        const { totalUser, currentPage, noPerPage, error } = this.props.user;
        return (
            <WhitePanel>
                <UserSearch />
                <UserInfoTable />
                <Pagination currentPage={currentPage} total={totalUser} noPerPage={noPerPage}
                    getPrevPage={this.getPrevPage} getNextPage={this.getNextPage} />
                {error && <MessageDialog title={"Message"} message={error} resetMessage={this.resetError} />}
            </WhitePanel>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.admin.user
    }
}

export default connect(mapStateToProps, actions)(User);