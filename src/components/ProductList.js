import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { addToWishlist, removeFromWishlist } from '../actions/wishlistActions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleWishlistToggle = (product) => {
    const isInWishlist = wishlistItems.some(item => item.id === product.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <div className="product-list" data-testid="product-list">
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-md-4 mb-4" data-testid={`product-${index}`}>
            <div className="custom-card card h-100" data-testid="product-card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title" data-testid="product-name">{product.name}</h4>
                <p className="card-text price" data-testid="product-price">${product.price.toFixed(2)}</p>
                <p className="card-text description">{product.description}</p>
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="btn btn-primary mb-2"
                  data-testid={`add-to-cart-${index}`}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => handleWishlistToggle(product)}
                  className={`btn ${isInWishlist(product.id) ? 'btn-danger' : 'btn-secondary'}`}
                  data-testid={`wishlist-toggle-${index}`}
                >
                  {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;