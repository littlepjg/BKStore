import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="profile">
                <div className="container">
                    <h2>Quản lý tài khoản</h2>
                    <div class="account_manage">
                        <div class="col-sm-4">
                            <div class="info_account">
                                <h4>Thông tin cá nhân</h4>
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="inputemail" class="form-control" value="" title="" />

                                <label for="firstname">Tên:</label>
                                <input type="text" name="firstname" class="form-control" placeholder="First name" />
                                <input type="text" name="lastname" class="form-control" placeholder="Last name" />

                                <label for="birthday">Ngày sinh:</label>
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker1'>
                                        <input type='text' name="birthday" class="form-control" />
                                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                                <label>Giới tính:</label>
                                <div class="form-group">
                                    <label class="radio-inline"> <input type="radio" name="gender" checked="checked" />Nam</label>
                                    <label class="radio-inline"><input type="radio" name="gender" />Nữ</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="info_account">
                                <h4>Địa chỉ</h4>
                                <label for="address">Địa chỉ cư trú:</label>
                                <input type="text" name="address" class="form-control" value="" />
                                <label for="destination_address">Địa chỉ giao hàng:</label>
                                <input type="text" name="destination_address" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="info_account">
                                <h4>Mật khẩu</h4>
                                <label for="password">Mật khẩu:</label>
                                <input type="password" name="password" class="form-control" value="" />
                                <label for="new_password">Mật khẩu mới:</label>
                                <input type="password" name="new_password" class="form-control" value="" />
                                <label for="re_new_password">Nhập lại:</label>
                                <input type="password" name="re_new_password" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-10"></div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-primary">Cập nhật thay đổi</button>
                            </div>
                        </div>
                    </div>
                    <div class="table_order">
                        <h4>Đơn hàng gần đây</h4>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    <th>Ngày đặt hàng</th>
                                    <th>Sản phẩm</th>
                                    <th>Tổng cộng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>17/08/2018</td>
                                    <td>
                                        <div className="product">
                                            <img src="https://vn-live-02.slatic.net/p/7/giay-sneaker-thoi-trang-nam-zapas-gs068-den-hang-phan-phoi-chinh-thuc-6844-6687215-699c60183c52fdbabd89890074c17ca1-catalog.jpg" alt="ảnh sản phẩm" />
                                        </div>
                                    </td>
                                    <td>89.000 đ</td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>21/10/2018</td>
                                    <td>
                                        <div className="product">
                                            <img src="https://vn-live-02.slatic.net/p/7/ao-khoac-nam-kaki-classic-gmk-den-6739-99143751-55482486ce7530fd96fbbeba04c59a4e-catalog.jpg" alt="ảnh sản phẩm" />
                                        </div>
                                    </td>
                                    <td>127.000 đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;