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
    <div className="col-md-4">
      <h3>Cart</h3>
      <div className="cart-summary">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item custom-card card h-100 mb-4">
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
            <div className="cart-total mt-3 p-3 bg-light rounded">
              <h4>Cart Summary</h4>
              <p>Total: ${totalAmount.toFixed(2)}</p>
              {discount > 0 && (
                <p>Discount: {discount}% (-${(totalAmount * discount / 100).toFixed(2)})</p>
              )}
              <h5>Final Total: ${calculateDiscountedTotal().toFixed(2)}</h5>
            </div>
          </>
        )}
        <Coupon />
      </div>
    </div>
  );
};

export default Cart;
