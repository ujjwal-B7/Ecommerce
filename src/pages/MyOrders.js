import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  clearErrors,
  getMyOrders,
} from "../store/actions/orderAction";
import html2pdf from "html2pdf.js";
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

  // download pdf
  const pdfDownload = () => {
    const itemsPdf = document.getElementById("orderedItemsPdf");
    const pdfOptions = {
      margin: 10,
      filename: "bill.pdf",
      image: {
        type: "jpeg",
        quality: 1.0,
      },
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };
    html2pdf().from(itemsPdf).set(pdfOptions).save();
  };
  return (
    <>
      <Loader loading={loading} />
      <div
        className="w-full lg:h-[33vh] h-[30vh] bg-[url('./images/store.jpg')] bg-cover mb-2"
        data-aos="zoom-in"
      ></div>
      <section className="max-w-screen-xl mx-auto text-gray-900 pb-4">
        <div className="flex justify-end pt-10" onClick={pdfDownload}>
          <button className="bg-gray-900 hover:bg-opacity-90 rounded-xl h-8 px-4 text-white">
            Download pdf
            <span className="pt-2">
              <ion-icon name="arrow-down-outline"></ion-icon>
            </span>
          </button>
        </div>
        <div id="orderedItemsPdf">
          <h1 className="text-xl font-semibold text-center py-5">
            {user.name}'s Orders
          </h1>
          {orders &&
            orders.map((order) => (
              <div className="orderCard mb-5 rounded-lg">
                <div>
                  {order.orderItems.map((item) => (
                    <>
                      <div className="flex items-center justify-around text-sm mb-5 ">
                        <img className="w-28 pt-5" src={item.image} alt="" />
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
                                : "text-green-600"
                            }`}
                          >
                            {order.orderStatus}
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <hr className="border-gray-400 w-[90%] mx-auto pb-2" />
                <div className="text-end px-14 text-sm pb-5">
                  <span className="font-semibold">Delivery Charge: </span>
                  <span>{order.shippingPrice}</span> <br />
                  <span className="font-semibold">Total Price: </span>
                  <span>{order.itemsPrice}</span> <br />
                  <span className="font-semibold">Grand Total: </span>
                  <span>{order.itemsPrice + order.shippingPrice}</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default MyOrders;
