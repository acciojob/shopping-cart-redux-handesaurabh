import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { addToWishlist } from '../actions/wishlistActions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <div className="product-list">
      <h3 className="mb-4">All Products</h3>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="custom-card card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text price">${product.price.toFixed(2)}</p>
                <p className="card-text description">{product.description}</p>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary mr-2 mt-auto">
                  Add to Cart
                </button>
                <button 
                  onClick={() => handleAddToWishlist(product)}
                  className={`btn ${isInWishlist(product.id) ? 'btn-danger' : 'btn-secondary'}`}
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