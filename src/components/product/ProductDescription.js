import React from "react";
import ProductListItem from "../productList/ProductListItem";
import PropTypes from "prop-types";
import { productDescriptionType } from "../../types";
import styles from "./ProductDescription.module.css"

const ProductDescription = ({title, description, specification, price}) => {
  return <ul className={styles.description}>
    <li><span>Title:</span> {title}</li>
    <li><span>Description:</span> {description}</li>
    <li><span>Specification:</span> {specification}</li>
    <li><span>Price: {price}</span></li>
  </ul>
};

ProductListItem.propTypes = {
  product: PropTypes.objectOf(productDescriptionType).isRequired,
};

export default ProductDescription;
