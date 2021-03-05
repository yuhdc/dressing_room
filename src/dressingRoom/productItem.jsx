import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from "./actions"

class ProductItem extends Component {
    _choseClothes = product => {
        // this.props.dispatch({
        //     type: "SECLECTED_PRODUCT",
        //     payload: {
        //         type: product.type,
        //         img: product.imgSrc_png
        //     }
        // })

        this.props.dispatch(createAction("SECLECTED_PRODUCT", {
            type: product.type,
            img: product.imgSrc_png
        }))
    };



    render() {
        const { name, imgSrc_jpg, } = this.props.item;
        return (
            <div className="card" style={{ height: 400 }}>
                <img src={imgSrc_jpg} alt="" style={{ height: 300 }} />
                <div className="card-body">
                    <h5>{name}</h5>
                    <div className="btn btn-success" onClick={() => this._choseClothes(this.props.item)}>Thử</div>
                </div>
            </div>
        )
    }
}

export default connect()(ProductItem)
//đẩy lên