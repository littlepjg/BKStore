import React, { Component } from 'react';
const styleWidthF = {
    width: '100%'
}
class HomeSlider extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators center">
                    <li data-target="myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="myCarousel" data-slide-to="1"></li>
                    <li data-target="myCarousel" data-slide-to="2"></li>
                    <li data-target="myCarousel" data-slide-to="3"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img style={styleWidthF} src="https://cdn.tgdd.vn/qcao/27_11_2018_23_13_33_800x170.jpg" alt="image 01" />
                    </div>
                    <div class="item ">
                        <img style={styleWidthF} src="https://cdn.tgdd.vn/qcao/28_11_2018_13_47_47_iphone-xr-800-170.png" alt="image 02" />
                    </div>
                    <div class="item">
                        <img style={styleWidthF} src="https://cdn.tgdd.vn/qcao/17_11_2018_09_54_42_Nokia-3.1-800-170.png" alt="image 03" />
                    </div>
                    <div class="item">
                        <img style={styleWidthF} src="https://cdn.tgdd.vn/qcao/31_10_2018_10_39_50_J-Plus-800-170.png" alt="image 03" />
                    </div>
                </div>

                <a href="#myCarousel" className="left carousel-control" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Prev</span>
                </a>
                <a href="#myCarousel" class="right carousel-control" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default HomeSlider;