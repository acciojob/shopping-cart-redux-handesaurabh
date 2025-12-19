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
    <div className="wishlist">
      <h2 className="mb-4">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <div className="alert alert-info">Your wishlist is empty</div>
      ) : (
        <div className="wishlist-items row">
          {wishlistItems.map(item => (
            <div key={item.id} className="col-md-6 mb-4">
              <div className="custom-card card h-100">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={item.image} className="card-img" alt={item.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">${item.price.toFixed(2)}</p>
                      <button onClick={() => handleAddToCart(item)} className="btn btn-primary mr-2 mt-auto">
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        className="btn btn-danger"
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