import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";

import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={
    createStoreWithMiddleware(reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /*for redux chrome-extention*/ )
  }>
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
