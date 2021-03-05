import React, { Component } from "react";

class Detail extends Component {
  render() {
    const {
      name,
      img,
      screen,
      backCamera,
      frontCamera,
      price,
    } = this.props.product;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>{name}</h1>
            <img src={img} alt="product" />
          </div>
          <div className="col-8">
            <h1>Thông số kĩ thuật</h1>
            <table className="table">
              <tr>
                <td>Màn hình</td>
                <td>{screen}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{frontCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{backCamera}</td>
              </tr>
              <tr>
                <td>Giá</td>
                <td>{price}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
