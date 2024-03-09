import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearErrors, getMyOrders } from "../store/actions/orderAction";
const Notifications = ({ notifications, setNotifications }) => {
  const [click, setClick] = useState(true);
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrder);

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

  const createDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  };

  return (
    <section className="text-gray-900 cart relative z-50 px-2">
      <p className="text-3xl font-semibold py-5 text-center">Notifications</p>
      <div
        className="absolute lg:hidden top-5 right-4  text-center text-3xl"
        onClick={() => setClick(!click)}
      >
        <ion-icon name="close"></ion-icon>
      </div>
      {orders &&
        orders.map(
          (order) =>
            order.orderStatus === "Shipped" &&
            order.orderItems.map((item) => (
              <>
                <div className="bg-text w-full h-20 flex items-center px-4 gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-[#EE6524]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-600">{createDate()}</p>
                    <p className="text-lg">Your {item.name} is shipped</p>
                  </div>
                </div>
              </>
            ))
        )}
      {orders &&
        orders.map(
          (order) =>
            order.orderStatus === "Delivered" &&
            order.orderItems.map((item) => (
              <>
                <div className="bg-text w-full h-20 flex items-center px-4 gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-[#EE6524]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="mt-2 text-sm text-gray-600">{createDate()}</p>
                    <p className="text-lg">Your {item.name} is Delivered</p>
                  </div>
                </div>
              </>
            ))
        )}
      {orders &&
        orders.map(
          (order) =>
            order.orderStatus === "Processing" && (
              <>
                <p className="text-center pt-32  text-gray-500">
                  No notifications yet.
                </p>
              </>
            )
        )}
    </section>
  );
};

export default Notifications;
