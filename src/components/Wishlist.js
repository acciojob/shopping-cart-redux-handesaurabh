import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../actions/wishlistActions';
import { addToCart } from '../actions/cartActions';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="wishlist" data-testid="wishlist">
      <h2 className="mb-4">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <div className="alert alert-info" data-testid="empty-wishlist">Your wishlist is empty</div>
      ) : (
        <div className="wishlist-items row" data-testid="wishlist-items">
          {wishlistItems.map((item, index) => (
            <div key={item.id} className="col-md-6 mb-4" data-testid={`wishlist-item-${index}`}>
              <div className="custom-card card h-100" data-testid="wishlist-card">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={item.image} className="card-img" alt={item.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title" data-testid="wishlist-item-name">{item.name}</h5>
                      <p className="card-text" data-testid="wishlist-item-price">${item.price.toFixed(2)}</p>
                      <button 
                        onClick={() => handleAddToCart(item)} 
                        className="btn btn-primary mr-2 mt-auto"
                        data-testid={`wishlist-add-to-cart-${index}`}
                      >
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        className="btn btn-danger"
                        data-testid={`wishlist-remove-${index}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;