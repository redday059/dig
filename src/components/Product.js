import React from 'react'
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    if (!this.props.product){
      return <div>No results found.</div>;
    }

    return 'from product'
  }
}

const mapStateToProps = (state, props) => (
  {
    product: state.products[props.match.params.id]
  }
)

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Product)