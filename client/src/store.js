import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProducts } from './redux/reducers/ProductsReducer';
import { cartReducer } from './redux/reducers/CartReducer';
import { getCurrentUser } from './redux/reducers/UsersReducer';

const middlewares = [thunk];

const rootReducer = combineReducers({
  products: getProducts,
  cart: cartReducer,
  currentUser: getCurrentUser,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistreducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = createStore(
  persistreducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

export default { store, persistor };
