import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  MY_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_FAIL,
  ALL_ORDERS_SUCCESS,
  UPDATE_ORDERS_REQUEST,
  UPDATE_ORDERS_SUCCESS,
  UPDATE_ORDERS_FAIL,
  UPDATE_ORDERS_RESET,
  DELETE_ORDERS_REQUEST,
  DELETE_ORDERS_SUCCESS,
  DELETE_ORDERS_FAIL,
  DELETE_ORDERS_RESET,
  CLEAR_ERRORS,
} from "../constants/orderConstants";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// create order
export const createOrder = (order) => async (dispatch) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);
    toast.success(
      `${orderInfo && orderInfo.totalPrice} successfully paid.Thankyou.`,
      {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({ type: CREATE_ORDER_FAIL, payload: error.response.data.message });
  }
};

// get my orders
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDER_REQUEST });
    const { data } = await axios.get("/api/v1/orders/myOrders");
    dispatch({ type: MY_ORDER_SUCCESS, payload: data.myOrders });
  } catch (error) {
    dispatch({ type: MY_ORDER_FAIL, payload: error.response.data.message });
  }
};

// get all orders by admin
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });
    const { data } = await axios.get("/api/v1/admin/order/total");
    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
    console.log("data", data.orders);
  } catch (error) {
    dispatch({ type: ALL_ORDERS_FAIL, payload: error.response.data.message });
  }
};

// update order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDERS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/order/${id}`,
      order,
      config
    );
    toast.success(`Ordered updated successfully.`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({ type: UPDATE_ORDERS_SUCCESS, payload: data.success });
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({
      type: UPDATE_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDERS_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);
    toast.success(`Ordered deleted successfully.`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({ type: DELETE_ORDERS_SUCCESS, payload: data.success });
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({
      type: DELETE_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get single order details
export const getSingleOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/order/${id}`);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.singleOrder });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
