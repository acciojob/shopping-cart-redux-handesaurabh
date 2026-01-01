import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../actions/wishlistActions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.wishlist.items);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="custom-card">
          <div className="card-body">
            <button
              className="btn"
              onClick={() => dispatch(removeFromWishlist(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
