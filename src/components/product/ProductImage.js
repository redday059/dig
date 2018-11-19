import React from "react";
import ProductListItem from "../productList/ProductListItem";
import PropTypes from "prop-types";

const ThumbImg = ({isActive, id, src, handleClick}) => {
  const onClick = () => handleClick(id)

  return (<img
    className={ isActive ? 'active' : 'inactive'}
    alt={id}
    onClick={onClick}
    src={src}
  />)
}

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
      <div>
        <img alt={activeImageId} className='original' src={originals[activeImageId]} />
        <div className='thumbs'>
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
