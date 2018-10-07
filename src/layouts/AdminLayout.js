import React, { Component } from 'react';
import SideBar from '../components/admin/SideBar';
import $ from 'jquery';
import './admin.css';

class AdminLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateWeb: true,
            hideNav: false
        }
    }
    componentDidMount() {
        $('.navbar-minimalize.minimalize-styl-2').click((e) => {
            const { stateWeb, hideNav } = this.state;
            if (stateWeb) {
                $('.navbar-default.navbar-static-side').toggle();
                if (!hideNav) {
                    $('#page-wrapper').css({ "margin-left": "0px" });
                } else {
                    $('#page-wrapper').css({ "margin-left": "220px" });
                }
                this.setState({ hideNav: !hideNav });
            }
        })
    }

    render() {
        return (
            <div id="wrapper">
                <SideBar />
                <div id="page-wrapper" className="gray-bg container-fluid" style={{ minHeight: "636px" }}>
                    <div className="row border-bottom">
                        <nav className="navbar navbar-static-top" style={{ marginBottom: "0" }}>
                            <div className="navbar-header">
                                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary "><i className="fa fa-bars"></i> </a>
                            </div>
                        </nav>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AdminLayout;