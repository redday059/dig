import React from "react";
import ProductListItem from "../productList/ProductListItem";
import PropTypes from "prop-types";
import { commentType } from "../../types";

const ThumbImg = ({isActive, id, src, handleClick}) => {
  const onClick = () => handleClick(id)

  return (<img
    className={ isActive ? 'active' : 'inactive'}
    alt={id}
    onClick={onClick}
    src={src}
  />)
}

const ProductImage = ({thumbs, originals, activeId, handleThumbClick}) => {
  return (
    <div>
      <img alt={activeId} className='original' src={originals[activeId]} />
      <div className='thumbs'>
        { thumbs.map(
          (thumbUrl, id) =>
            <ThumbImg isActive={activeId === id} id={id} key={id} src={thumbUrl} handleClick={handleThumbClick}/>
        )}
      </div>
    </div>
)}

ProductListItem.propTypes = {
  activeId: PropTypes.number.isRequired,
  thumbs: PropTypes.arrayOf(PropTypes.string),
  originals: PropTypes.arrayOf(PropTypes.string),
  handleThumbClick: PropTypes.func.isRequired,
};

export default ProductImage;
