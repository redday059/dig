import React from "react";

export default ({title, specification, price}) => {
  return <ul>
    <li>{title}</li>
    <li>{specification}</li>
    <li>{price}</li>
  </ul>
}
