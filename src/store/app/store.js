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

// reducer for all
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
});
let initialState = {};
const middleware = [thunk];

export const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: composeWithDevTools(),
});
