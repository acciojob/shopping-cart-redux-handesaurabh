import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../actions/wishlistActions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.wishlist.items);

  return (
    <>
      {items.map(item => (
        <div key={item.id} className="custom-card card h-100 mb-4">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body d-flex flex-column">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">${item.price.toFixed(2)}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeFromWishlist(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Wishlist;
