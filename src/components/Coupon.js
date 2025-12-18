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
    <div className="coupon-section mb-4">
      <h3>Apply Coupon</h3>
      {coupon.code ? (
        <div className="applied-coupon alert alert-success d-flex justify-content-between align-items-center">
          <span>Coupon applied: {coupon.code} ({coupon.discount}% off)</span>
          <button onClick={handleRemoveCoupon} className="btn btn-danger btn-sm">Remove</button>
        </div>
      ) : (
        <div className="coupon-form input-group mb-3">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="form-control"
          />
          <div className="input-group-append">
            <button onClick={handleApplyCoupon} className="btn btn-primary">Apply</button>
          </div>
        </div>
      )}
      <div className="available-coupons alert alert-info">
        <p className="mb-0">Available coupons: SAVE10, SAVE20, SAVE5</p>
      </div>
    </div>
  );
};

export default Coupon;