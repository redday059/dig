import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import throttle from 'lodash.throttle';

import reducers from "./reducers";
import { loadState, saveState } from "./localStorage";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const persistedState = loadState();

const store = createStoreWithMiddleware(reducers, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /*for redux chrome-extention*/ )

store.subscribe(throttle(() => {
  saveState({
    comments: store.getState().comments,
  });
}, 1000));

export default store;
