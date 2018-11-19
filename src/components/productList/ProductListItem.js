import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { productShortType } from "../../types";

const ProductListItem = product => {
  const { id, title, description, specification, price, images } = product;

  return (
    <div key={id}>
      <div>
        <div>
          <img alt={title} src={images[1].thumb}/>
        </div>
        <div>
          Title: {title};
        </div>
        <div>
          Description: {description}
        </div>
        <div>
          Specification: {specification}
        </div>
        <div>
          Price: {price}
        </div>
      </div>
      <div>
        <Link to={`/product/${id}`}>
          Go to product page
        </Link>
      </div>
    </div>
  )
};

ProductListItem.propTypes = {
  product: PropTypes.objectOf(productShortType).isRequired,
};

export default ProductListItem;
