import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import './App.css';
import { fetchProducts } from "../actions/fetch";

class App extends Component {
  constructor(props) {
    super(props);
    props.fetchProducts();
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};

export default connect(null, { fetchProducts })(App);

