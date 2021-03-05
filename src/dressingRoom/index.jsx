import React, { Component } from 'react';
import Categories from './categories';
import Model from './model';
import ProductList from './productList';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <Categories/>
                        <ProductList/>
                    </div>
                    <div className="col-5">
                        <Model/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;