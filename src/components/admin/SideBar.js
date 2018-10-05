import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="slimScrollDiv" style={{ position: "relative", overflow: "hidden", width: "auto", height: "100%" }}><div className="sidebar-collapse" style={{ overflow: "hidden", width: "auto", height: "100%" }}>
                    <ul className="nav metismenu" id="side-menu" style={{ display: "block" }}>
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                                <img alt="image" className="img-circle" src="https://graph.facebook.com/2281503488740589/picture?type=large&amp;redirect=true&amp;width=50&amp;height=50" />
                            </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="clear"> <span className="block m-t-xs"> Chào <strong className="font-bold">Nguyễn Tài Tiêu</strong>
                                    </span> </span></a>
                            </div>
                        </li>
                        <li>
                            <a href="/admin/post"><i className="fa fa-newspaper-o"></i> <span className="nav-label">Đăng bài</span></a>
                        </li>
                        <li className="active">
                            <a href="/admin/user"><i className="fa fa-user"></i> <span className="nav-label">Quản lý người dùng</span></a>
                        </li>
                        <li>
                            <a href="#product" data-toggle="collapse"><i className="fa fa-archive"></i> <span className="nav-label">Quản lý sản phẩm</span><span className="fa arrow"></span></a>
                            <ul id="product" className="nav nav-second-level collapse">
                                <li><a href="bai-viet-theo-doi/">Quản lý thương hiệu</a></li>
                                <li><a href="user-theo-doi/">Quản lý mặt hàng</a></li>
                                <li><a href="user-theo-doi/">Quản lý sản phẩm</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#statistical" data-toggle="collapse"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Thống kê</span><span className="fa arrow"></span></a>
                            <ul id="statistical" className="nav nav-second-level collapse">
                                <li><a href="bai-viet-theo-doi/">Thống kê doanh thu</a></li>
                                <li><a href="user-theo-doi/">Thống kê sản phẩm</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/logout"><i className="fa fa-sign-out"></i> <span className="nav-label">Đăng xuất</span></a>
                        </li>
                    </ul>
                </div><div className="slimScrollBar" style={{ background: "rgb(0, 0, 0)", width: "7px", position: "absolute", top: "0px", opacity: "0.4", display: "none", borderRadius: "7px", zIndex: "99", right: "1px", height: "121.304px" }}></div><div className="slimScrollRail" style={{ width: "7px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "7px", background: "rgb(51, 51, 51)", opacity: "0.9", zIndex: "90", right: "1px" }}></div></div>
            </nav>
        );
    }
}

export default SideBar;