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
    <div className="cart" data-testid="cart">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info" data-testid="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <div className="cart-items" data-testid="cart-items">
            {cartItems.map((item, index) => (
              <div key={item.id} className="cart-item row mb-3 p-3 border rounded" data-testid={`cart-item-${index}`}>
                <div className="col-md-2">
                  <img src={item.image} className="img-fluid" alt={item.name} />
                </div>
                <div className="col-md-3 item-details">
                  <h5 data-testid="cart-item-name">{item.name}</h5>
                  <p className="mb-0" data-testid="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="col-md-3 quantity-controls d-flex align-items-center">
                  <button 
                    onClick={() => handleDecreaseQuantity(item.id)} 
                    className="btn btn-sm btn-outline-secondary mr-2"
                    data-testid={`decrease-quantity-${index}`}
                  >
                    -
                  </button>
                  <span className="mx-2" data-testid={`quantity-${index}`}>{item.quantity}</span>
                  <button 
                    onClick={() => handleIncreaseQuantity(item.id)} 
                    className="btn btn-sm btn-outline-secondary ml-2"
                    data-testid={`increase-quantity-${index}`}
                  >
                    +
                  </button>
                </div>
                <div className="col-md-2 item-total d-flex align-items-center">
                  <strong data-testid="item-total">${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <button 
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="btn btn-danger btn-sm"
                    data-testid={`remove-item-${index}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary card p-4 mt-4" data-testid="cart-summary">
            <Coupon />
            <div className="summary-row d-flex justify-content-between py-2" data-testid="subtotal-row">
              <span>Subtotal:</span>
              <span data-testid="subtotal">${totalAmount.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="summary-row d-flex justify-content-between py-2" data-testid="discount-row">
                <span>Discount ({discount}%):</span>
                <span data-testid="discount-amount">-${(totalAmount * discount / 100).toFixed(2)}</span>
              </div>
            )}
            <div className="summary-row total d-flex justify-content-between py-2 border-top font-weight-bold" data-testid="total-row">
              <span>Total:</span>
              <span data-testid="total">${calculateDiscountedTotal().toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;