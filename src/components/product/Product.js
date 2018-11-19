import React from 'react'
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import get from "lodash.get";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";

class Product extends React.Component {
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
    if (!this.props.product){
      return <div>No results found.</div>;
    }

    const {imgThumbs, imgOriginals, images, ...rest} = this.props.product;
    const imgTotal = get(this.props, 'product.images.length');

    return (
      <>
        { imgTotal ?
          <ProductImage
            thumbs={imgThumbs}
            originals={imgOriginals}
            activeId={this.state.activeImageId}
            handleThumbClick={this.changeActiveImage}/> :
          null
        }
        <ProductDescription {...rest} />
      </>
    )
  }
}

const mapStateToProps = (state, props) => (
  {
    product: state.products[props.match.params.id],
  }
);

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Product);
