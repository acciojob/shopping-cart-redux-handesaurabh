import { APPLY_COUPON, REMOVE_COUPON } from '../actions/actionTypes';

const initialState = {
  code: null,
  discount: 0
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_COUPON:
      // Define some sample coupons
      const coupons = {
        'SAVE10': 10,    // 10% discount
        'SAVE20': 20,    // 20% discount
        'SAVE5': 5       // 5% discount
      };
      
      const discount = coupons[action.payload] || 0;
      
      return {
        ...state,
        code: action.payload,
        discount: discount
      };

    case REMOVE_COUPON:
      return {
        ...state,
        code: null,
        discount: 0
      };

    default:
      return state;
  }
};

export default couponReducer;