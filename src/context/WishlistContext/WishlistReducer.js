export const wishlistInitialState = {
  wishlistItems: [],
};

export function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const exists = state.wishlistItems.some(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        return state;
      }

      return {
        ...state,
        wishlistItems: [
          ...state.wishlistItems,
          {
            ...action.payload,
            quantity: action.payload.quantity || 1,
          },
        ],
      };
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        wishlistItems: state.wishlistItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        wishlistItems: state.wishlistItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity:
                  item.quantity > 1
                    ? item.quantity - 1
                    : 1,
              }
            : item
        ),
      };

    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlistItems: [],
      };

    default:
      return state;
  }
}