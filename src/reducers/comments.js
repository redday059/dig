import { ADD_COMMENT_TYPE } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT_TYPE:
      const {productId, text} = action.payload;
      const prevComments = state[productId] || [];
      return { ...state, [productId]: [text, ...prevComments] };
    default:
      return state;
  }
}