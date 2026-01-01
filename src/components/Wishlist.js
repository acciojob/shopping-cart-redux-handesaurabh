import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../actions/wishlistActions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.wishlist.items);

  return (
    <div>
      <h3>Wishlist</h3>
      {items.map(item => (
        <div key={item.id} className="custom-card">
          <h4>{item.name}</h4>
          <button
            className="remove-wishlist"
            onClick={() => dispatch(removeFromWishlist(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
