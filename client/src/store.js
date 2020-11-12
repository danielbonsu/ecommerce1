import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProducts } from './redux/reducers/ProductsReducer';
import { cartReducer } from './redux/reducers/CartReducer';

const middlewares = [logger, thunk];

const rootReducer = combineReducers({
  products: getProducts,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;