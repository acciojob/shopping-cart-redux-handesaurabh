import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/actionTypes';

const initialState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex !== -1) {
        // Item already exists in cart, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount + action.payload.price
        };
      } else {
        // New item, add to cart
        const newItem = {
          ...action.payload,
          quantity: 1
        };
        return {
          ...state,
          items: [...state.items, newItem],
          totalAmount: state.totalAmount + action.payload.price
        };
      }

    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find(item => item.id === action.payload);
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity)
      };

    case INCREASE_QUANTITY:
      const increaseIndex = state.items.findIndex(item => item.id === action.payload);
      const increasedItems = [...state.items];
      increasedItems[increaseIndex].quantity += 1;
      return {
        ...state,
        items: increasedItems,
        totalAmount: state.totalAmount + increasedItems[increaseIndex].price
      };

    case DECREASE_QUANTITY:
      const decreaseIndex = state.items.findIndex(item => item.id === action.payload);
      const decreasedItems = [...state.items];
      
      if (decreasedItems[decreaseIndex].quantity > 1) {
        decreasedItems[decreaseIndex].quantity -= 1;
        return {
          ...state,
          items: decreasedItems,
          totalAmount: state.totalAmount - decreasedItems[decreaseIndex].price
        };
      } else {
        // Remove item if quantity becomes 0
        const itemToRemove = state.items.find(item => item.id === action.payload);
        const filteredItems = state.items.filter(item => item.id !== action.payload);
        return {
          ...state,
          items: filteredItems,
          totalAmount: state.totalAmount - itemToRemove.price
        };
      }

    default:
      return state;
  }
};

export default cartReducer;