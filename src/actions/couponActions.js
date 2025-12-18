import { APPLY_COUPON, REMOVE_COUPON } from './actionTypes';

export const applyCoupon = (couponCode) => {
  return {
    type: APPLY_COUPON,
    payload: couponCode
  };
};

export const removeCoupon = () => {
  return {
    type: REMOVE_COUPON
  };
};