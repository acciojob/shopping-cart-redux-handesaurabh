import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyCoupon, removeCoupon } from '../actions/couponActions';

const Coupon = () => {
  const [couponCode, setCouponCode] = useState('');
  const dispatch = useDispatch();
  const coupon = useSelector(state => state.coupon);

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      dispatch(applyCoupon(couponCode.toUpperCase()));
      setCouponCode('');
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
  };

  return (
    <div className="coupon-section">
      <h3>Apply Coupon</h3>
      {coupon.code ? (
        <div className="applied-coupon">
          <p>Coupon applied: {coupon.code} ({coupon.discount}% off)</p>
          <button onClick={handleRemoveCoupon}>Remove</button>
        </div>
      ) : (
        <div className="coupon-form">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
          />
          <button onClick={handleApplyCoupon}>Apply</button>
        </div>
      )}
      <div className="available-coupons">
        <p>Available coupons: SAVE10, SAVE20, SAVE5</p>
      </div>
    </div>
  );
};

export default Coupon;