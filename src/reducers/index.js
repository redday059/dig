import { combineReducers } from 'redux';
import products from './products'
import comments from './comments'

const rootReducer = combineReducers({
  products,
  comments
});

export default rootReducer;
