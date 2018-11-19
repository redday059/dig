import React from "react";

const ProductDescription = ({title, specification, price}) => {
  return <ul>
    <li>{title}</li>
    <li>{specification}</li>
    <li>{price}</li>
  </ul>
}

export default ProductDescription;
