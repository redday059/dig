import { NEW_PRODUCTS_TYPE } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case NEW_PRODUCTS_TYPE: {
      const nextState = {...state};
      action.payload.data.forEach(
        product => {
          nextState[product.id] = product;
          product.imgOriginals = product.images.map(img => img.original);
          product.imgThumbs = product.images.map(img => img.thumb);
        }
      );
      return nextState;
    }
    default:
      return state;
  }
}
