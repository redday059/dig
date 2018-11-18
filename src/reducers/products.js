import { FETCH_PRODUCTS_TYPE } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_TYPE: {
      const nextState = {...state};
      action.payload.data.forEach(
        product => { nextState[product.id] = product }
      )
      return nextState;
    }
    default:
      return state;
  }
}