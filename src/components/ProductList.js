import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist } from '../actions/cartActions';

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
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>
            <div className="product-actions">
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button 
                onClick={() => handleAddToWishlist(product)}
                className={isInWishlist(product.id) ? 'in-wishlist' : ''}
              >
                {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;