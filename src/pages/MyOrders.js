import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  clearErrors,
  createOrder,
  getMyOrders,
} from "../store/actions/orderAction";
const MyOrders = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrder);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(clearErrors());
    }
    dispatch(getMyOrders());
  }, [error, dispatch]);
  return (
    <>
      <Loader loading={loading} />
      <div
        className="w-full lg:h-[33vh] h-[30vh] bg-[url('./images/store.jpg')] bg-cover mb-2"
        data-aos="zoom-in"
      ></div>
      <section className="max-w-screen-xl mx-auto h-screen text-gray-900">
        <h1 className="text-xl font-semibold text-center py-5">
          {user.name}'s Orders
        </h1>
        <div>
          {orders &&
            orders.map((order) => (
              <div>
                <div>
                  {order.orderItems.map((item) => (
                    <>
                      <div className="flex justify-around text-sm mb-5">
                        <img className="w-24" src={item.image} alt="" />
                        <div>
                          <span className="font-semibold">Name: </span>
                          <span className="">{item.name}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Quantity: </span>
                          <span>{item.quantity}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Price: </span>
                          <span>{item.price}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Ordered at: </span>
                          <span>{order.createdAt.substr(0, 9)}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Order status: </span>
                          <span
                            className={`${
                              order.orderStatus === "Processing"
                                ? "text-red-600"
                                : "text-gray-600"
                            }`}
                          >
                            {order.orderStatus}
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="text-end px-14 text-sm">
                  <hr className="border-gray-400" />
                  <span className="font-semibold">Shipping Charge: </span>
                  <span>{order.shippingPrice}</span> <br />
                  <span className="font-semibold">Total Price: </span>
                  <span>{order.itemsPrice}</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default MyOrders;
