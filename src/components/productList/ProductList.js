import React from 'react'
import { connect } from "react-redux";
import map from 'lodash.map'

import ProductListItem from "./ProductListItem";
import { productType } from "../../types";
import PropTypes from "prop-types";

import styles from './ProductList.module.css';

const ProductList = (props) => {
  if (!props.products){
    return <div>No results found.</div>;
  }

  return (
    <div className={styles.list}>
      <div>{map(props.products, item => ProductListItem(item))}
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return { products: state.products }
};

ProductList.propTypes = {
  products: PropTypes.objectOf(productType).isRequired,
};

export default connect(mapStateToProps)(ProductList);
