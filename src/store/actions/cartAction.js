import {
  ADD_TO_CART,
  SHIPPING_INFO,
  REMOVE_CART_ITEM,
  ADD_TO_WISHLIST,
  REMOVE_WISHLIST_ITEM,
} from "../constants/cartConstants";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// add to cart
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/products/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      description: data.product.description,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      category: data.product.category,
      quantity,
    },
  });
  localStorage.setItem(
    "addedCartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

// remove from cart
export const removeCartItem = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });
  toast.success("Item removed from cart.", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  localStorage.setItem(
    "addedCartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};
// add to wishlist
export const addToWishlist = (_id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/products/${_id}`);
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: {
      product: data.product._id,
      name: data.product.name,
      description: data.product.description,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
    },
  });
  localStorage.setItem(
    "addedWishlistItems",
    JSON.stringify(getState().cart.wishlistItems)
  );
};

// remove from wishlist
export const removeWishlistItem = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_WISHLIST_ITEM,
    payload: id,
  });
  toast.success("Item removed from wishlist.", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  localStorage.setItem(
    "addedWishlistItems",
    JSON.stringify(getState().cart.wishlistItems)
  );
};

// confirm order
export const checkOutOrder = (data) => async (dispatch) => {
  dispatch({
    type: SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
