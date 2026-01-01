import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { addToWishlist } from "../actions/wishlistActions";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="custom-card card">
            <h4>{product.name}</h4>
            <p>${product.price}</p>

            <button
              className="add-to-cart"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>

            <button
              className="add-to-wishlist"
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
