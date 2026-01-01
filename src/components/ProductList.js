import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { addToWishlist, removeFromWishlist } from '../actions/wishlistActions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isInWishlist = (id) =>
    wishlistItems.some(item => item.id === id);

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="custom-card card">
            <div className="card-body">
              <h4>{product.name}</h4>
              <p>${product.price}</p>

              <button
                className="btn btn-primary mb-2"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  isInWishlist(product.id)
                    ? dispatch(removeFromWishlist(product.id))
                    : dispatch(addToWishlist(product))
                }
              >
                {isInWishlist(product.id)
                  ? 'Remove from Wishlist'
                  : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
