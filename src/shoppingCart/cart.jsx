import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  // this.props.cart
  renderCartItem = () => {
    return this.props.cart.map((item, index) => {
      return <CartItem key={index} cartItem={item} />;
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="cart"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        {/* JSS / SCSS */}
        <div
          className="modal-dialog"
          style={{
            maxWidth: 900,
          }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <tr>
                  <th>Mã SP</th>
                  <th>Hình ảnh</th>
                  <th>Tên SP</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
                {this.renderCartItem()}
              </table>
              <h2 className="text-right">Total: {this.props.total.toLocaleString()}</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
