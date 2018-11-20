import React from "react";
import ProductListItem from "../productList/ProductListItem";
import PropTypes from "prop-types";
import styles from './ProductImage.module.css'

const ThumbImg = ({isActive, id, src, handleClick}) => {
  const onClick = () => handleClick(id);

  return (<img
    className={ isActive ? styles.active : styles.inactive}
    alt={id}
    onClick={onClick}
    src={src}
  />)
};

class ProductImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImageId: 0,
    }
  }

  changeActiveImage = id => {
    this.setState({
      activeImageId: id
    })
  };

  render() {
    const { thumbs, originals} = this.props;
    const { activeImageId } = this.state;
    return (
      <div className={styles.gallery}>
        <img alt={activeImageId} className={styles.original} src={originals[activeImageId]}/>
        <div className={styles.thumbs}>
          { thumbs.map(
            (thumbUrl, id) =>
              <ThumbImg
                isActive={activeImageId === id}
                id={id}
                key={id}
                src={thumbUrl}
                handleClick={this.changeActiveImage}
              />
          )}
        </div>
      </div>
  )}
}

ProductListItem.propTypes = {
  thumbs: PropTypes.arrayOf(PropTypes.string),
  originals: PropTypes.arrayOf(PropTypes.string),
};

export default ProductImage;
