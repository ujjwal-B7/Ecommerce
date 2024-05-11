import {
  ADD_TO_CART,
  SHIPPING_INFO,
  REMOVE_CART_ITEM,
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST_ITEM,
} from "../constants/cartConstants";

// cart reducer
export const cartReducer = (
  state = { cartItems: [], shippingInfo: {}, wishlistItems: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const itemExists = state.cartItems.find(
        (i) => i.product === item.product
      );
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === itemExists.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case ADD_TO_WISHLIST:
      const wishlistItem = action.payload;
      const wishlistItemExists = state.wishlistItems.find(
        (i) => i.product === wishlistItem.product
      );
      if (wishlistItemExists) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.map((i) =>
            i.product === wishlistItemExists.product ? wishlistItem : i
          ),
        };
      } else {
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, wishlistItem],
        };
      }
    case REMOVE_WISHLIST_ITEM:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (i) => i.product !== action.payload
        ),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    case SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    default:
      return state;
  }
};
