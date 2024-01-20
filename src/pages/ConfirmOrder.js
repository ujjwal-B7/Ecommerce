import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutSteps from "../components/CheckoutSteps";
import { Typography } from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
const ConfirmOrder = () => {
  const fetchedCartItems = JSON.parse(localStorage.getItem("addedCartItems"));
  const fetchedShippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [state, setState] = useState(shippingInfo.state);

  const subtotal = fetchedCartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  //   additional info
  const shippingCharges = subtotal > 1000 ? 100 : 200;
  const totalPrice = subtotal + shippingCharges;
  const address = `${fetchedShippingInfo.address}, ${fetchedShippingInfo.city}, ${fetchedShippingInfo.state}, ${fetchedShippingInfo.phoneNo}`;
  //   payment handler
  const proceedToPayment = (e) => {
    const data = {
      address,
      subtotal,
      shippingCharges,
      totalPrice,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/orderPayment");
  };
  return (
    <>
      {/* <Loader loading={loading} /> */}

      <div className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"></div>
      <CheckoutSteps activeStep={1} />
      <h1 className="text-center">Confirm Order</h1>
      <section className="flex justify-center text-gray-600">
        <div className="w-[50%] ">
          <div className="mb-4 p-4 text-gray-600">
            <h2 className="text-gray-900 text-xl font-semibold">Deliver To</h2>
            <div>
              <p>Name: {user.name}</p>
            </div>
            <div>
              <p>Phone: {fetchedShippingInfo.phoneNo}</p>
            </div>
            <div>
              <p>Address: {address}</p>
            </div>
          </div>
          <hr className="border-gray-600" />
          <div className="mt-4 p-4">
            <p className="text-gray-900 text-xl font-semibold">Ordered Items</p>
            {fetchedCartItems &&
              fetchedCartItems.map((item) => (
                <div key={item.product} className="flex justify-between p-4">
                  <img className="w-28" src={item.image} alt="" />
                  <Link
                    to={`/product/${item.product}`}
                    className="font-semibold text-lg w-[40%]"
                  >
                    {item.name}
                    <p className="font-light tracking-tight text-sm">
                      {item.description}
                    </p>
                  </Link>
                  <p>QTY: {item.quantity}</p>
                  <div>
                    {/* <b>subtotal:</b> */}
                    <span className="pl-2">
                      {item.quantity} X {item.price}={" "}
                      <b>Rs-{item.price * item.quantity}</b>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="border-l-gray-600 border-l-[1px] w-[25%] ordersPayment text-center  p-2 space-y-4">
          <p className="text-gray-900 text-xl font-semibold text-center pb-5">
            Order Summary
          </p>
          <div className="flex justify-between">
            <b>Subtotal:</b>
            <span>RS-{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <b>Shipping Charges:</b>
            <span>RS-{shippingCharges}</span>
          </div>
          <div className="flex justify-between">
            <b>Total:</b>
            <span>RS-{totalPrice}</span>
          </div>
          <button
            onClick={proceedToPayment}
            className="bg-[#EE6524] hover:opacity-95 w-full h-10 text-white rounded-xl "
          >
            Procees To Payment
          </button>
        </div>
      </section>
    </>
  );
};

export default ConfirmOrder;
