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
  const address = `${fetchedShippingInfo.address}, ${fetchedShippingInfo.city}, ${fetchedShippingInfo.state}`;

  //   payment handler
  const proceedToPayment = (e) => {
    const data = {
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
      <div
        className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"
        data-aos="zoom-in"
      ></div>
      <CheckoutSteps activeStep={1} />
      <section>
        <h1 className="text-center">Confirm Order</h1>
        <div>
          <h2>Shipping Info</h2>
          <div>
            <p>Name:</p>
            <span>{user.name}</span>
          </div>
          <div>
            <p>Phone:</p>
            <span>{shippingInfo.phoneNo}</span>
          </div>
          <div>
            <p>Address</p>
            <span>{address}</span>
          </div>
        </div>
        <div>
          {fetchedCartItems &&
            fetchedCartItems.map((item) => (
              <div key={item.product}>
                <img src={item.image} alt="" />
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <span>
                  {item.quantity} X {item.price}={" "}
                  <b>Rs-{item.price * item.quantity}</b>
                </span>
              </div>
            ))}
        </div>
        <div>
          <p>Order Summary</p>
          <div>
            <p>Subtotal:</p>
            <span>RS-{subtotal}</span>
          </div>
          <div>
            <p>Shipping Charges:</p>
            <span>RS-{shippingCharges}</span>
          </div>
          <div>
            <b>Total:</b>
            <span>RS-{totalPrice}</span>
          </div>
          <button onClick={proceedToPayment}>Procees To Payment</button>
        </div>
      </section>
    </>
  );
};

export default ConfirmOrder;
