import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDetailsReducer,
} from "../reducers/productReducers";
import {
  updateProfileReducer,
  userReducer,
  forgotPasswordReducer,
} from "../reducers/userReducers";
import { cartReducer } from "../reducers/cartReducers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// reducer for all
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  updateProfile: updateProfileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("addedCartItems")
      ? JSON.parse(localStorage.getItem("addedCartItems"))
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
