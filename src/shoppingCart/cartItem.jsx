import React, { Component } from "react";

class CartItem extends Component {

  onDeleteItem = () => {
    this.props.removeFromCart(this.props.cartItem);
  }


  render() {
    const { id, name, img, price } = this.props.cartItem.product;
    const { quantity } = this.props.cartItem;

    let tangSoLuong = () => {
      quantity++;
    }

    let giamSoluong = () => {
      quantity--;
    }

    return (
      <tr>
        <td>{id}</td>
        <td>
          <img src={img} alt="product" style={{ width: 50 }, { height: 60 }} />
        </td>
        <td>Iphone 12 promax</td>
        <td>
          <button className="btn btn-info">+</button>
          <span>{quantity}</span>
          <button className="btn btn-info">-</button>
        </td>
        <td>{price}</td>
        <td>{price * quantity}</td>
        <td><button className="btn btn-danger" onClick={this.onDeleteItem}>Xóa</button></td>
      </tr>
    );
  }
}

export default CartItem;
