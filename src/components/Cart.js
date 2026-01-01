import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions/cartActions';
import Coupon from './Coupon';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const discount = useSelector(state => state.coupon.discount);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const calculateDiscountedTotal = () => {
    if (discount > 0) {
      return totalAmount - (totalAmount * discount / 100);
    }
    return totalAmount;
  };

  return (
    <>
      {cartItems.map(item => (
        <div key={item.id} className="custom-card card h-100 mb-4">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body d-flex flex-column">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">${item.price.toFixed(2)}</p>
            <div className="quantity-controls d-flex align-items-center mb-2">
              <button
                className="btn btn-sm btn-outline-secondary mr-2"
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="btn btn-sm btn-outline-secondary ml-2"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
