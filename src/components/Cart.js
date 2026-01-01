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
    <div className="cart">
      {cartItems.length > 0 ? (
        <>
          <h3>Cart Items</h3>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item custom-card card h-100 mb-4">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">${item.price.toFixed(2)}</p>
                <div className="quantity-controls d-flex align-items-center mb-2">
                  <button
                    className="btn btn-sm btn-outline-secondary decrease-btn"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-2 quantity">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary increase-btn"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-danger remove-btn"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total: ${totalAmount.toFixed(2)}</p>
            {discount > 0 && (
              <p>Discount: {discount}%</p>
            )}
            <p>Final Total: ${calculateDiscountedTotal().toFixed(2)}</p>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Cart is empty</h3>
        </div>
      )}
      <Coupon />
    </div>
  );
};

export default Cart;
