import React from 'react'
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import get from "lodash.get";

const ProductImage = ({thumbs, originals, activeId, createOnThumbClick}) => (
  <div>
    <img className='active' src={originals[activeId]} />
    <div className='thumbs'>
      { thumbs.map(
        (thumbUrl, id) =>
          <img
            className={ activeId === id ? 'active' : 'blur'}
            key={id}
            onClick={createOnThumbClick(id)}
            src={thumbUrl}
          />
      )}
    </div>
  </div>
)

const ProductDescription = ({title, specification, price}) => {
  return <ul>
    <li>{title}</li>
    <li>{specification}</li>
    <li>{price}</li>
  </ul>
}

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImageId: null,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.activeImageId !== null) {
      return {}
    }

    if (!get(props, 'product.images.length')) {
      return {}
    }

    return {
      activeImageId: 0
    };
  }

  createOnThumbClick = id => e => {
    console.log('click', id)
    this.setState({
      activeImageId: id
    })
  }

  render() {
    if (!this.props.product){
      return <div>No results found.</div>;
    }

    const {imgThumbs, imgOriginals, images, ...rest} = this.props.product;

    return (
      <>
        {this.state.activeImageId !== null ?
          <ProductImage
            thumbs={imgThumbs}
            originals={imgOriginals}
            activeId={this.state.activeImageId}
            createOnThumbClick={this.createOnThumbClick}/> :
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
)

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Product)