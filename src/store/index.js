import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducers/cartReducer';
import wishlistReducer from '../reducers/wishlistReducer';
import couponReducer from '../reducers/couponReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  coupon: couponReducer
});

const store = createStore(rootReducer);

export default store;