import React, { Component } from 'react';
import SideBar from '../components/admin/SideBar';
import './admin.css';

class AdminLayout extends Component {
    render() {
        return (
            <div id="wrapper">
                <SideBar />
                <div id="page-wrapper" class="gray-bg" style={{minHeight: "636px"}}>
                    <div class="row border-bottom">
                        <nav class="navbar navbar-static-top" role="navigation" style={{marginBottom: "0"}}>
                            <div class="navbar-header">
                                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary "><i class="fa fa-bars"></i> </a>
                            </div>
                        </nav>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AdminLayout;