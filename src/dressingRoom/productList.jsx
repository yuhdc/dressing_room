import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './productItem';

class ProductList extends Component {

    renderProductList = () => {
        return this.props.pDuctList.filter(item => item.type === this.props.chosenCategories).map((item, index) => {
            return <div className="col-4" key={index}><ProductItem item={item} /></div>
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row py-4">
                    {this.renderProductList()};
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //state này đại diện cho toàn bộ dữ liệu trên store
    return {
        //lấy dữ liệu trên store và chuyển đổi thành props
        pDuctList: state.productList,
        chosenCategories: state.chosenCategories,
    };
};

export default connect(mapStateToProps)(ProductList);