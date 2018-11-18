import { FETCH_PRODUCTS_TYPE } from "../actions";
import get from "lodash.get";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_TYPE: {
      const nextState = {...state};
      action.payload.data.forEach(
        product => {
          nextState[product.id] = product;
          product.imgOriginals = product.images.map(img => img.original)
          product.imgThumbs = product.images.map(img => img.thumb)
        }
      );
      return nextState;
    }
    default:
      return state;
  }
}