import React from "react";
import ProductListItem from "../productList/ProductListItem";
import PropTypes from "prop-types";
import { productShortType } from "../../types";

const ProductDescription = ({title, specification, price}) => {
  return <ul>
    <li>{title}</li>
    <li>{specification}</li>
    <li>{price}</li>
  </ul>
}

ProductListItem.propTypes = {
  product: PropTypes.objectOf(productShortType).isRequired,
};

export default ProductDescription;
