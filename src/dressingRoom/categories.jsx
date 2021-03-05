import React, { Component } from 'react';
import { connect } from "react-redux";
import { createAction } from './actions';

class Categories extends Component {
    renderCategories = () =>
        this.props.cate.map((item, index) =>//truyền hàm có tham số dùng callback function
            <button className={this.props.chosenCategories === item.type ? "btn btn-success" : "btn btn-secondary"} onClick={this._chosenCategories(item.type)} key={index}>{item.showName}</button>
        );

    _chosenCategories = (payload) => () => {
        //dispatch: hàm đẩy dữ liệu lên store
        // this.props.dispatch({
        //     type: "SECLECTED_CATE",//mô tả action trên store
        //     payload//chứa giá trị cần gửi lên
        // })

        this.props.dispatch(createAction("SECLECTED_CATE", payload))
    }


    render() {
        console.log(this.props.cate);

        return (
            <div className="btn-group mb-5">
                {this.renderCategories()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //lấy dữ liệu trên store và chuyển đổi thành props
        cate: state.categories,
        chosenCategories: state.chosenCategories,
    };
};

export default connect(mapStateToProps)(Categories);