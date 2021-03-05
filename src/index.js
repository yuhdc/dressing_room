import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import CategoryReducer from "./dressingRoom/reducer/categoryReducer";
import ProductListReducer from "./dressingRoom/reducer/productListReducer";
import chosenCategoriesReducer from "./dressingRoom/reducer/chosenCategoriesReducer";
import ModelReducer from "./dressingRoom/reducer/modelReducer";

//bản chất redux, tất cả dữ liệu đưa lên storage đều dạng state, nếu lấy về xài thì state reload lại
const rootReducer = combineReducers({
  //tên dữ liệu: tên reducer quản lý
  categories: CategoryReducer,
  chosenCategories: chosenCategoriesReducer,
  productList: ProductListReducer,
  Model: ModelReducer,

});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
