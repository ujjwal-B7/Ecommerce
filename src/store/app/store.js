import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDetailsReducer,
  productReviewsReducer,
  createProductReducer,
  deleteProductReducer,
  updateProductReducer,
} from "../reducers/productReducers";
import {
  updateProfileReducer,
  userReducer,
  forgotPasswordReducer,
  getAllUserReducer,
} from "../reducers/userReducers";
import { cartReducer } from "../reducers/cartReducers";
import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
  allOrdersReducer,
  updateOrdersReducer,
} from "../reducers/orderReducers";

// reducer for all
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  updateProfile: updateProfileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrder: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  productReview: productReviewsReducer,
  createProduct: createProductReducer,
  deleteProduct: deleteProductReducer,
  updateProduct: updateProductReducer,
  allOrders: allOrdersReducer,
  updateAndDeleteOrder: updateOrdersReducer,
  allUsers: getAllUserReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("addedCartItems")
      ? JSON.parse(localStorage.getItem("addedCartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
   wishlistItems: localStorage.getItem("addedWishlistItems")
      ? JSON.parse(localStorage.getItem("addedWishlistItems"))
      : [],
  },
};

// let initialState = {
//   cart: {
//     cartItems: (() => {
//       const storedData = localStorage.getItem("cartItems");
//       return storedData ? JSON.parse(storedData) : [];
//     })(),
//   },
// };

const middleware = [thunk];
export const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
  devTools: composeWithDevTools(),
});
