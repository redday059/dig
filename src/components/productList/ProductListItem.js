import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { productListType } from "../../types";
import styles from "./ProductListItem.module.css"

const ProductListItem = product => {
  const { id, title, price, images } = product;

  return (
    <div key={id} className={styles.item}>
      <div className={styles.image}>
        <img alt={title} src={images[1].thumb}/>
      </div>
      <div className={styles.info}>
        <div>
          Title: {title}
        </div>
        <div>
          Price: {price}
        </div>
        <div className={styles.link}>
          <Link to={`/product/${id}`}>
            Go to product page
          </Link>
        </div>
      </div>
    </div>
  )
};

ProductListItem.propTypes = {
  product: PropTypes.objectOf(productListType).isRequired,
};

export default ProductListItem;
