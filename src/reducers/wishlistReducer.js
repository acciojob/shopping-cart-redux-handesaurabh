import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/actionTypes';

const initialState = {
  items: []
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      // Check if item already exists in wishlist
      const exists = state.items.some(item => item.id === action.payload.id);
      if (exists) {
        return state; // Item already in wishlist
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export default wishlistReducer;