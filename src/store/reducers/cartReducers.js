import {
  ADD_TO_CART,
  SHIPPING_INFO,
  REMOVE_CART_ITEM,
} from "../constants/cartConstants";

// cart reducer
export const cartReducer = (state = { cartItems: [],shippingInfo:{} }, action) => {
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
