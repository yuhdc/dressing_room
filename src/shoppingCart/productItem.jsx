import React, { Component } from "react";

class ProductItem extends Component {
  onViewDetail = () => {
    this.props.getProduct(this.props.product);
  };

  onAddToCart = () => {
    this.props.addToCart(this.props.product);
  };

  render() {
    const { img, name } = this.props.product;
    return (
      <div className="card">
        <img src={img} alt="product" style={{ height: 250 }} />
        <div className="card-body">
          <p className="lead font-weight-bold">{name}</p>
          <button onClick={this.onViewDetail} className="btn btn-success">
            Xem chi tiết
          </button>
          <button onClick={this.onAddToCart} className="btn btn-info">
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
