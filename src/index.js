import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";

import './index.css';
import store from "./createStore";


ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router>
        <Switch>
          <Route path='/product/:id' component={Product}/>
          <Route path='/' exact component={ProductList}/>
        </Switch>
      </Router>
    </App>
  </Provider>
  , document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
