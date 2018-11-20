import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styles from './App.module.css';
import { fetchProducts } from "../actions/products";

class App extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="App">
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};

export default connect(null, { fetchProducts })(App);
