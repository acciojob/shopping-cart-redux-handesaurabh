import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { addToWishlist } from "../actions/wishlistActions";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item custom-card card h-100 mb-4">
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body d-flex flex-column">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text price">${product.price.toFixed(2)}</p>
            <p className="card-text description">{product.description}</p>
            <button
              className="btn btn-primary mb-2 add-to-cart-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-secondary add-to-wishlist-btn"
              onClick={() => dispatch(addToWishlist(product))}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
