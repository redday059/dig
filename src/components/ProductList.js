import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import map from 'lodash.map'

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
          Description: {specification}
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

const ProductList = (props) => {
  if (!props.products){
    return <div>No results found.</div>;
  }

    console.log('props',props)
  return (
    <div>
      <div>{map(props.products, item => ProductListItem(item))}
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  console.log('state', state)
  return { products: state.products }
}

export default connect(mapStateToProps)(ProductList);
