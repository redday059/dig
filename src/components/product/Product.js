import React from 'react'
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import get from "lodash.get";

import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import { postComment } from '../../actions/comments';
import ProductComments from "./ProductComments";

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

  postCommentForProduct = text => {
    if (!text) {
      return
    }
    
    this.props.postComment(this.props.product.id, text);
  }

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
        <ProductComments addComment={this.postCommentForProduct} comments={this.props.comments}/>
      </>
    )
  }
}

const mapStateToProps = (state, props) => (
  {
    product: state.products[props.match.params.id],
    comments: state.comments[props.match.params.id] || [],
  }
);

export default compose(
  withRouter,
  connect(mapStateToProps, {postComment})
)(Product);
