import React from 'react'
import { connect } from "react-redux";
import map from 'lodash.map'
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  if (!props.products){
    return <div>No results found.</div>;
  }

  return (
    <div>
      <div>{map(props.products, item => ProductListItem(item))}
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  console.log('state', state)
  return { products: state.products }
};

export default connect(mapStateToProps)(ProductList);
