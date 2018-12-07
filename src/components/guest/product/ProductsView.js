import React, { Component } from 'react';
import styled from 'styled-components';
import grid from './grid-icon.png';
import list from './list-icon.png';

import ProductItem from './ProductItem';
import pagination from './pagination/pageUtil';
import ProductItemHorizonto from './ProductItemHorizonto';

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
    constructor(){
        super();
        this.state = {
            mode: 'list',

            products: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            ],
            currentPage: 1,
            limit: 40,
        }
        this.clickHandle = this.clickHandle.bind(this);
        this.handleClickItemPager = this.handleClickItemPager.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
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

    clickHandle(mode){
        this.setState({
            mode: mode.trim()
        });
    }

    handleClickItemPager(pageNum){
        console.log(pageNum);
        
        this.setState({
            currentPage: pageNum,
        });
    }
    renderPager(pageNum, key){
        const current = this.state.currentPage;
        if (typeof pageNum === 'number') {
            return pageNum !== current ? <li key={key} onClick={() => this.handleClickItemPager(pageNum)}><a href="#">{pageNum}</a></li> : <li onClick={() => this.handleClickItemPager(pageNum)} className="active" key={key}><a href="#">{pageNum}</a></li>
        }
        return <li onClick={() => this.handleClickItemPager(pageNum)} className="disabled" key={key}><a href="#">{pageNum}</a></li>;
    }

    render() {
        const {mode} = this.state;

        const {products, currentPage, limit} = this.state;
        const countPage = Math.ceil(products.length / limit);
        const pageList = pagination(countPage, currentPage);

        const indexOfLastProduct = limit*currentPage;
        const indexOfFirstProduct = indexOfLastProduct - limit;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        return (
            <div className="container-fluid">
                <div class="row">
                    <div class="col-sm-2">
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
                        
                    </div>

                    <div class="col-sm-10">
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
                                    <a href="#" class={"list " + (mode==="list"?'active':"")} onClick={()=>this.clickHandle("list")}>
                                        List
                                    </a>
                                    <a href="#" class={"grid "+(mode==="grid"?'active':"")} onClick={()=>this.clickHandle("grid")}>
                                        Grid
                                    </a>
                                </div>
                            </Sorter>
                            <h3 className="title">Điện thoại di động</h3>
                            
                        </div>
                    

                        <div class="row">
                            {
                                currentProducts.length>0?currentProducts.map((product, key)=>{
                                    if(mode === "list"){
                                        return (
                                            <div class="col-md-3" key={key}>
                                                <ProductItem key={key} product={product}/>        
                                            </div>
                                        )
                                    }
                                    if(mode === 'grid'){
                                        return (
                                            <div class="col-xs-12">
                                                <ProductItemHorizonto key={key}/>
                                            </div>
                                        )
                                    }
                                    
                                }):<p>Không tìm thấy sản phẩm nào</p>
                            }
                        </div>

                        <div class="row text-right">
                            <ul class="pagination">
                                <li onClick={()=>this.prevPage()}><span class="glyphicon glyphicon-chevron-left"></span></li>
                                { 
                                    pageList.map( (pageNum, key)=> this.renderPager(pageNum, key))
                                }
                                <li onClick={()=>this.nextPage()}><span class="glyphicon glyphicon-chevron-right"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsView;