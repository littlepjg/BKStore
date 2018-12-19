import React, { Component } from 'react';
import styled from 'styled-components';
import grid from './grid-icon.png';
import list from './list-icon.png';

import ProductItem from './ProductItem';
import pagination from './pagination/pageUtil';
import ProductItemHorizonto from './ProductItemHorizonto';
import HomeSlider from '../HomeSlider';

import axios from 'axios';

const Category = styled.div`
    position: relative;
    margin: 15px 0;
    padding: 15px;
    border: 1px solid #e1e1e1;
    overflow: hidden;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    clear: both;
    font: inherit;
    vertical-align: baseline;

    .title {
        font-size: 16px;
        text-transform: uppercase;
        margin-bottom: 0;
        float: left;
        position: relative;
        width: 100%;
        margin-bottom: 15px;
        color: #22f2f;
        font-weight: 300;
        padding-bottom: 5px;
    }

    ul{
        list-style: none outside none;
        margin: 0;
        padding: 0;
        font: inherit;
        vertical-align: baseline;

        li {
            display: list-item;
            margin-bottom: 10px;
    
            a {
                font-size: 13px;
                color: #666666;
                display: block;
                text-decoration: none;
                transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    
                &:hover{
                    color: #f7544a;
                    outline: 0;
                }
                &:focus{
                    outline: medium none;
                    outline-offset: 0;  
                }
            }
        }
    }

    .price{
        margin-top: 8px;
        input{
            float: left;
            display: block;
            width: 70px;
            height: 30px;
            padding: 0 7px;
            text-align: left;
            color: #404040;
            border: 1px solid #a8a8a8;
            border-radius: 3px;
            outline: 0;
            background-color: #fff;
            -webkit-box-shadow: 0 1px 1px 0 #ececec;
            box-shadow: 0 1px 1px 0 #ececec;
            -webkit-transition: all .3s linear;
            -o-transition: all .3s linear;
            transition: all .3s linear;
            min-width: auto;
            -moz-appearance: textfield;
            line-height: 1.15;
            font-size: 100%;
            margin: 0;
            overflow: visible;
        }

        div{
            float: left;
            width: 10px;
            text-align: center;
            line-height: 30px;
            color: gray;
        }

        button{
            padding-left: 8px;
            padding-right: 8px;
            float: left;
            height: 30px;
            padding: 0 7px;
            padding-right: 7px;
            padding-left: 7px;
            border-radius: 3px;
            outline: 0;
            margin-left: 4px;
            color: #fff;
            background-color: #f57224;
            border-color: #f57224;
            display: inline-block;
            margin-bottom: 0;
            font-weight: 500;
            text-align: center;
            touch-action: manipulation;
            cursor: pointer;
            background-image: none;
            border: 1px solid transparent;
            white-space: nowrap;
            line-height: 1.15;
            font-size: 13px;
            -moz-user-select: none;
            transition: all .3s cubic-bezier(.645,.045,.355,1);
            position: relative;
            text-transform: none;
        }
    }
`;

const Sorter = styled.div`
    float: right;
    font-size: 13px;
    line-height: 40px;
    height: 40px;
    display: flex;

    .list {
        background-image: url(${list});
    }
    
    .grid {
        background-image: url(${grid});
    }

    a {
        float: left;
        width: 25px;
        height: 25px;
        border: 1px solid #cfcfcf;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background-position: center top;
        background-repeat: no-repeat;
        background-color: #fff;
        font-size: 0;
        margin-right: 10px;
        position: relative;

        &:hover{
            background-position: center bottom;
            background-color: #f7544a;
            border-color: #f7544a;
        }
        
    }
    .active{
        background-position: center bottom;
        background-color: #f7544a;
        border-color: #f7544a;

        &:after, &:before{
            top: 100%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
        
        }

        &:after{
            border-color: rgba(247, 84, 74, 0);
            border-top-color: #f7544a;
            border-width: 8px;
            margin-left: -8px;
        }
        &:before{
            border-color: rgba(247, 84, 74, 0);
            border-top-color: #f7544a;
            border-width: 8px;
            margin-left: -8px;
        }
    }

    .view{
        padding-left: 10px;
        padding-right: 10px;
    }

`;

class ProductsView extends Component {
    constructor() {
        super();
        this.state = {
            mode: 'list',

            products: [
                {
                    id: 1,
                    product_name: 'Samsung Galaxy A8 32GB RAM 4GB 5.6inch - Hãng phân phối chính thức',
                    product_images: '//vn-test-11.slatic.net/original/37bbbc9c8bf093781e0708af287730a7.jpg,//vn-test-11.slatic.net/original/afb574d7faf084ab3052bf957b952787.jpg',
                    unit: 'VNĐ',
                    base_price: 7990000,
                    description: 'Galaxy A8 là dòng điện thoại đầu tiên của Samsung sở hữu camera Selfie kép cùng bạn tạo nên những bức ảnh Selfie độc đáo. Camera sau 16MP ghi lại mọi khoảnh khắc sáng rõ ngay cả khi thiếu sáng. Chỉ cần nhấn nút chụp và thỏa sức tạo kiểu, bạn sẽ lưu giữ ngay những khoảnh khắc vui nhộn cùng với bạn bè.',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 2,

                },
                {
                    id: 2,
                    product_name: 'Laptop Dell Inspiron 7588 (N7588A) I7-8750H, VGA GTX 1050TI 4GB, 15.6", Win 10 - Hãng phân phối chính thức',
                    product_images: '//vn-test-11.slatic.net/original/f45aa2d753f178483fb8a8240f9a21dd.jpg,//vn-test-11.slatic.net/original/569591d3d11f5c43892b074637b48468.jpg,//vn-test-11.slatic.net/original/7482ae5ca75265cd39f7500e5578df02.jpg,//vn-test-11.slatic.net/original/a5cbf01aef52e6426d0b938aa43542ae.jpg',
                    unit: 'VNĐ',
                    base_price: 30890000,
                    description: 'Dell Inspiron 7588 (N7588A) I7-8750H là chiếc máy tính hướng tới phân khúc dành cho các bạn học sinh, sinh viên hay nhân viên văn phòng có thể dùng đồ họa – kỹ thuật hay chơi các tựa game giải trí. Máy có thiết kế hiện đại và được trang bị cấu hình Intel thế hệ thứ 8 cho khả năng xử lý phần mềm hay tối ưu điện năng tốt.',
                    quantity: 15,
                    product_type_id: 2,
                    provider_id: 6,

                },
                {
                    id: 3,
                    product_name: 'Điện thoại Huawei Y9 (2019)',
                    product_images: 'https://cdn.tgdd.vn/Products/Images/42/192313/huawei-y9-2019-blue-200-180x125.png, https://cdn.tgdd.vn/Products/Images/42/192313/huawei-y9-2019-black-200-180x125.png,https://cdn.tgdd.vn/Products/Images/42/192313/huawei-y9-2019-den-2-180x125.jpg,https://cdn.tgdd.vn/Products/Images/42/192313/huawei-y9-2019-den-6-180x125.jpg',
                    unit: 'VNĐ',
                    base_price: 2990000,
                    description: 'Specifications of Huawei Y6 prime 2018 2GB 16GB 5.7" 1440x720P Snapdragon 425 CPU 13MP+8MP Camera Android 8.0 3000mAh',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 7,

                },
                {
                    id: 4,
                    product_name: 'điện thoại điện thoại điện thoại - điện thoại Nokia E72 PN4',
                    product_images: 'https://media3.scdn.vn/img2/2018/7_16/lORH2H_simg_de2fe0_500x500_maxb.jpg,https://media3.scdn.vn/img2/2018/7_16/lJgl9L_simg_de2fe0_500x500_maxb.png,https://media3.scdn.vn/img2/2018/7_16/8qiQ6j_simg_de2fe0_500x500_maxb.png, https://media3.scdn.vn/img2/2018/7_16/nHBFso_simg_de2fe0_500x500_maxb.png, https://media3.scdn.vn/img2/2018/7_16/2SZlDX_simg_de2fe0_500x500_maxb.png',
                    base_price: 2990000,
                    unit: 'VNĐ',
                    description: 'Thông số kỹ thuật :Thông số kỹ thuật :Điện thoại Samsung Galaxy A6 ( 2018 )Màn hình: Super AMOLED, 5.6", HD+Hệ điều hành: Android 8.0 (Oreo) Camera sau: 16 MP Camera trước: 16 MP CPU: Exynos 7870 8 nhân 64-bit RAM: 3 GB Bộ nhớ trong: 32 GB Thẻ nhớ: MicroSD, hỗ trợ tối đa 256 GB Thẻ SIM: 2 Nano SIM, Hỗ trợ 4G  Dung lượng pin: 3000 mAh Bộ sản phẩm bao gồm : Hộp , thân máy , sạc , sách hướng dẫn sử dụng ...',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 3,

                },
                {
                    id: 5,
                    product_name: 'Điện Thoại Samsung Galaxy Note 9 (128GB/6GB) - Hàng Chính Hãng',
                    product_images: 'https://salt.tikicdn.com/cache/w1200/ts/product/a1/47/bb/9b0e85752e241a43e2e4533023527f19.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/ce/0c/2c/0e76b62c55f09a71e7fc3336cc08a2bf.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/32/f4/47/70e0c0b9e106604b42a579e2659dce8e.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/d8/15/78/49ea2cc30e4f63312ae6485c4de1223f.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/44/22/de/19e73e24ec6e6177684ebc66ca675bec.jpg',
                    unit: 'VNĐ',
                    base_price: 20490000,
                    description: 'sản phẩm Chính hãng, Mới 100%, Nguyên seal, Chưa Active Miễn phí giao hàng toàn quốc Thiết kế: Nguyên khối, Màn hình vô cực không viền Màn hình: 6.4 inch 2960 x 1440 pixels Camera Trước: 8MP Camera Sau: 12 MP Dual-cameraCPU: Exynos 9810 8 nhân 64 bit Bộ Nhớ: 128GB RAM: 6GB SIM tương thích: 2 Nano SIM Tính năng: Mở khóa bằng vân tay, nhận dạng khuôn mặt',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 2,

                },
                {
                    id: 6,
                    product_name: 'Điện Thoại Samsung Galaxy J7 Pro - Hàng Chính Hãng (Đã Kích Hoạt) Bảo Hành 6 Tháng ',
                    product_images: 'https://salt.tikicdn.com/cache/w1200/ts/product/57/88/e3/4c4299085abf744ccf60d5a1a01ac18f.jpg,https://salt.tikicdn.com/cache/550x550/ts/product/99/1c/c7/b244931f803ee7d05a3864cfa59fe387.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/b6/7b/06/9e3c5912540062aaf935e4846fa34c7d.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/3d/ce/27/483069413ec9b50a867a61abbe1ebfed.jpg,https://salt.tikicdn.com/media/catalog/product/i/m/img-0227-1497241908306.u2769.d20170613.t101320.563449.jpg',
                    unit: 'VNĐ',
                    base_price: 4990000,
                    description: 'Sản phẩm Chính hãng, Mới 100%, Nguyên seal Sản phẩm đã được kích hoạt bảo hành điện tử qua tổng đài 6060 của Samsung Tiki Cam Kết Bảo Hành đủ 6 tháng từ khi nhận hàng theo tiêu chuẩn về chính sách và phạm vi bảo hành của Samsung Xem chi tiết chính sách và phạm vi bảo hành của Samsung tại http://www.samsung.com/vn/support/warranty/ Miễn phí giao hàng toàn quốc Thiết kế: Kim loại nguyên khối, kính Gorrila cong 2.5 Màn hình: 5.5", Full HD, Super AMOLED Camera Trước/Sau: 13MP/ 13MP CPU: Exynos 7870, 8 nhân, 1.6GHz Bộ Nhớ: 32GB RAM: 3GB SIM tương thích: Nano Bảo mật vân tay một chạm',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 2,

                },
                {
                    id: 7,
                    product_name: 'Điện Thoại Samsung Galaxy S9 - Hàng Chính Hãng ',
                    product_images: 'https://salt.tikicdn.com/ts/product/06/5f/27/0fbefc4b1acd8f5e8a3d0443c267154e.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/e6/3c/fa/0de886b90ae73fcec2a8fd2a9f7f7a3f.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/17/a0/ef/431d141be3824320b47cece41e51dc63.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/12/fc/21/a8e09e009f55010f9597df419ca60d6d.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/44/79/f9/af727958f452d3f9814e5355982186c5.jpg',
                    unit: 'VNĐ',
                    base_price: 14590000,
                    description: 'Điện thoại chính hãng, Nguyên seal, Mới 100%, Chưa Active Miễn phí giao hàng toàn quốc Thiết kế: Nguyên khối, màn hình vô cực Màn hình: 5.8", 2K+ (1440 x 2960 Pixels) Camera Trước/Sau: 8MP/12MP CPU: Exynos 9810 8 nhân 64 bit, 4 nhân 2.8 GHz & 4 nhân 1.7 GHz Bộ Nhớ: 64GB RAM: 4GB Tính năng: Chống nước, chống bụi đạt chuẩn IP68 ',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 2,

                },
                {
                    id: 8,
                    product_name: 'Điện Thoại Samsung Galaxy Note 8 - Hàng Chính Hãng ',
                    product_images: 'https://salt.tikicdn.com/cache/w1200/ts/product/7f/6b/06/0dfbfb741726ebf3306a6d2f94ff20f1.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/5/_/5.u3059.d20170825.t162007.86082.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/6/_/6.u3059.d20170825.t162007.115762.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/9/_/9.u3059.d20170825.t162007.201215.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/2/_/2.u3059.d20170825.t162006.990507.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/4/_/4.u3059.d20170825.t162007.58721.jpg',
                    unit: 'VNĐ',
                    base_price: 19000000,
                    description: ' Chính hãng, Nguyên seal, Mới 100 %, Chưa Active Miễn phí giao hàng toàn quốc Thiết kế: Nguyên khối, màn hình vô cực không viền  Màn hình: 6.3 inches(1440 x 2960 pixels)   Camera Trước / Sau: 8MP / 12MP CPU: Lõi Tám(lõi Tứ 2.3GHz + lõi Tứ 1.7GHz), 64 bit Bộ Nhớ: 64 GB RAM: 6GB SIM tương thích: Nano SIM Tính năng: Chống nước, chống bụi đạt chuẩn IP68 Tích hợp bút S-Pen',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 2,
                },
                {
                    id: 9,
                    product_name: 'Điện Thoại Samsung Galaxy S8 Plus - Hàng Chính Hãng ',
                    product_images: 'https://salt.tikicdn.com/cache/w1200/ts/product/2b/05/f6/0b05790b0ade7de2643c131ee465d767.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/s/m/sm_g950f_galaxys8_1.u2769.d20170404.t153358.248583.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/s/m/sm_g950f_galaxys8_2.u2769.d20170404.t153358.292284.jpg,https://salt.tikicdn.com/cache/w1200/media/catalog/product/s/m/sm_g950f_galaxys8_6.u2769.d20170404.t153358.416757.jpg,https://salt.tikicdn.com/cache/w550/media/catalog/product/s/8/s8plus4.u3781.d20170630.t100255.442557.jpg,https://salt.tikicdn.com/media/catalog/product/s/8/s8plus3.u3781.d20170630.t100255.413899.jpg',
                    unit: 'VNĐ',
                    base_price: 13990000,
                    description: 'Chính hãng, Nguyên seal, Mới 100%, Chưa Active Miễn phí giao hàng toàn quốc Thiết kế: Nguyên khối Màn hình: Super AMOLED, 2K (1440 x 2960 Pixels) Camera Trước/Sau: 8MP/ 12MP CPU: Exynos 8895 8 nhân 64-bit Bộ nhớ: 64GB RAM: 4GB Nano SIM & Micro SIM (SIM 2 chung khe thẻ nhớ) Tính năng: Mở khóa bằng vân tay, Quét mống mắt',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 2,

                },
                {
                    id: 10,
                    product_name: 'Điện Thoại Samsung Galaxy A7 (64GB/4GB) 2018 - Hàng Chính Hãng ',
                    product_images: 'https://salt.tikicdn.com/cache/w1200/ts/product/37/2d/34/4efd47760cd830864b92820311c4b081.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/dc/2a/09/3aa743fa5f0978348245affb2f71813a.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/b8/dd/68/fa1038ed5171cbd853d9826da9af1bf9.jpg,https://salt.tikicdn.com/cache/w1200/ts/product/de/01/49/dada4669905651a23bcc661b6f85d8da.jpg',
                    unit: 'VNĐ',
                    base_price: 7290000,
                    description: 'Chính hãng, Mới 100%, Nguyên seal, Chưa Active Miễn phí giao hàng tiêu chuẩn toàn quốc Thiết kế: Nguyên khối Màn hình: Super AMOLED, 6 inch, Full HD+ Camera Trước: 24MP Camera Sau: 24MP + 5MP + 8MP CPU: Exynos 7885 8 nhân 64-bit Bộ Nhớ: 64GB RAM: 4GB SIM: Nano SIM Tính năng: Mở khóa bằng vân tay, Chụp ảnh góc rộng',
                    quantity: 15,
                    product_type_id: 1,
                    provider_id: 2,

                },
            ],
            currentPage: 1,
            limit: 30,
            totalCount: '',
            hasPrev,
            hasNext,
        }
        this.clickHandle = this.clickHandle.bind(this);
        this.handleClickItemPager = this.handleClickItemPager.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    componentWillMount(){
       
    }

    nextPage() {
        const { currentPage, limit, products } = this.state;
        const countPages = Math.ceil(products.length / limit);

        if (currentPage < countPages) {
            this.setState({
                currentPage: currentPage + 1
            });
        }
    }

    prevPage() {
        const { currentPage } = this.state;

        if (currentPage > 1) {
            this.setState({
                currentPage: currentPage - 1
            });
        }
    }

    clickHandle(mode) {
        this.setState({
            mode: mode.trim()
        });
    }

    handleClickItemPager(pageNum) {
        console.log(pageNum);

        this.setState({
            currentPage: pageNum,
        });
    }
    renderPager(pageNum, key) {
        const current = this.state.currentPage;
        if (typeof pageNum === 'number') {
            return pageNum !== current ? <li key={key} onClick={() => this.handleClickItemPager(pageNum)}><a href="#">{pageNum}</a></li> : <li onClick={() => this.handleClickItemPager(pageNum)} className="active" key={key}><a href="#">{pageNum}</a></li>
        }
        return <li onClick={() => this.handleClickItemPager(pageNum)} className="disabled" key={key}><a href="#">{pageNum}</a></li>;
    }

    render() {
        const { mode } = this.state;

        const { products, currentPage, limit } = this.state;
        const countPage = Math.ceil(products.length / limit);
        const pageList = pagination(countPage, currentPage);

        const indexOfLastProduct = limit * currentPage;
        const indexOfFirstProduct = indexOfLastProduct - limit;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        return (
            <div className="container-fluid">
                <div class="row">
                    <HomeSlider />
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="category">
                            <div>Relative Catagory</div>
                        </div>

                        <Category className="category leftbar">
                            <h3 className="title">Categories</h3>
                            <ul>
                                <li><a href="#"> Samsung </a></li>
                                <li><a href="#">Apple</a></li>
                                <li><a href="#">Xiaomi</a></li>
                                <li><a href="#">ASUS</a></li>
                                <li><a href="#">SONY</a></li>
                                <li><a href="#">WIKO</a></li>
                            </ul>
                        </Category>

                        <Category className="category leftbar">
                            <h3 class="title">Price</h3>
                            <div className="price">
                                <input type="number" min={0} placeholder="Min" defaultValue pattern="[0-9]*" ú />
                                <div>-</div>
                                <input type="number" min={0} placeholder="Max" defaultValue pattern="[0-9]*" />
                                <button type="button" className="btn btn-primary btn-icon-only">
                                    Go
                                </button>
                            </div>
                        </Category>

                        <Category className="category leftbar">
                            <h3 className="title">Storage</h3>
                            <ul>
                                <li><a href="#"> 64GB </a></li>
                                <li><a href="#"> 4GB </a></li>
                                <li><a href="#"> 8GB </a></li>
                                <li><a href="#"> 16GB </a></li>
                                <li><a href="#"> 32GB </a></li>
                                <li><a href="#"> 1GB </a></li>
                            </ul>
                        </Category>

                        <Category className="category leftbar">
                            <h3 className="title">Color Family</h3>
                            <ul>
                                <li><a href="#"> Black </a></li>
                                <li><a href="#"> Gold </a></li>
                                <li><a href="#"> Red </a></li>
                                <li><a href="#"> Yellow </a></li>
                                <li><a href="#"> White </a></li>
                                <li><a href="#"> Blue </a></li>
                                <li><a href="#"> Pink </a></li>
                                <li><a href="#"> Grey </a></li>
                            </ul>
                        </Category>

                        <Category className="category leftbar">
                            <h3 className="title">Phone Screen size</h3>
                            <ul>
                                <li><a href="#"> 4.6-5 Inch </a></li>
                                <li><a href="#"> More than 5.6 Inch </a></li>
                                <li><a href="#"> 5.1-5.5 Inch </a></li>
                                <li><a href="#"> 3.6-4 Inch </a></li>
                                <li><a href="#"> Less than 3.5 Inch </a></li>
                                <li><a href="#"> 4.1-4.5 Inch </a></li>
                            </ul>
                        </Category>

                    </div>

                    <div class="col-sm-9">
                        <div class="row">
                            <Sorter class="sorter">
                                <p>Sort by:</p>
                                <div class="selection">
                                    <select class="selectpicker">
                                        <option>Popularity</option>
                                        <option>Price low to hight</option>
                                        <option>Price hight to low</option>
                                    </select>
                                </div>

                                <div className="view">View</div>
                                <div>
                                    <a href="#" class={"list " + (mode === "list" ? 'active' : "")} onClick={() => this.clickHandle("list")}>
                                        List
                                    </a>
                                    <a href="#" class={"grid " + (mode === "grid" ? 'active' : "")} onClick={() => this.clickHandle("grid")}>
                                        Grid
                                    </a>
                                </div>
                            </Sorter>
                            <h3 className="title">Điện thoại di động</h3>
                        </div>
                        <div class="row">
                            {
                                currentProducts.length > 0 ? currentProducts.map((product, key) => {
                                    if (mode === "list") {
                                        return (
                                            <div class="col-md-4" key={key}>
                                                <ProductItem key={key} product={product} />
                                            </div>
                                        )
                                    }
                                    if (mode === 'grid') {
                                        return (
                                            <div class="col-xs-12">
                                                <ProductItemHorizonto key={key} />
                                            </div>
                                        )
                                    }

                                }) : <p>Không tìm thấy sản phẩm nào</p>
                            }
                        </div>

                        <div class="row text-right">
                            <ul class="pagination">
                                <li onClick={() => this.prevPage()}><span class="glyphicon glyphicon-chevron-left"></span></li>
                                {
                                    pageList.map((pageNum, key) => this.renderPager(pageNum, key))
                                }
                                <li onClick={() => this.nextPage()}><span class="glyphicon glyphicon-chevron-right"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsView;