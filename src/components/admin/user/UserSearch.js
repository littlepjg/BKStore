import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../../actions/admin_user_action';

const FormUser = styled.form`
    padding: 5px 0 35px 0;
    width: 300px;
    display: flex;
    margin-left: 50px;

    input {
        padding: 0 8px 0 8px;
        border-radius: 1px;
    }

    button {
        border-radius: 1px;
    }
`;

class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getUsersByPage(1, this.state.searchValue);
    }

    render() {
        const { searchValue } = this.state;
        const { totalUser } = this.props;
        return (
            <div>
                <h3>Số lượng: {totalUser}</h3>

                <FormUser onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" className="form-control input-sm" placeholder="Tìm kiếm bằng email"
                        value={searchValue} onChange={(e) => this.setState({ searchValue: e.target.value })} />
                    <button type="submit" className="btn btn-primary btn-sm"><i class="fa fa-search"></i></button>
                </FormUser>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalUser: state.admin.user.totalUser
    }
}

export default connect(mapStateToProps, actions)(UserSearch);