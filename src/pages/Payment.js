import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CheckoutSteps from "../components/CheckoutSteps";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Payment = () => {
  const fetchedCartItems = JSON.parse(localStorage.getItem("addedCartItems"));
  const fetchedShippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const [showPaymentLoader, setShowPaymentLoader] = useState(true);

  const payBtn = useRef(null);
  const navigate = useNavigate();
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  console.log(orderInfo);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useSelector((state) => state.user);

  const paymentData = {
    amount: orderInfo.totalPrice * 100,
  };

  //   submit payment
  const submitHandler = async (e) => {
    e.preventDefault();
    setShowPaymentLoader(!showPaymentLoader);
    payBtn.current.disabled = true;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("api/v1/payment", paymentData, config);
      const client_secret = data.client_secret;
      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: fetchedShippingInfo.address,
              city: fetchedShippingInfo.city,
              state: fetchedShippingInfo.state,
            },
          },
        },
      });
      if (result.error) {
        payBtn.current.disabled = false;
        toast.error(result.error.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        if (result.paymentIntent.status === "succeeded") {
          toast.success(
            `${orderInfo && orderInfo.totalPrice} successfully paid.Thankyou.`,
            {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          setShowPaymentLoader(!showPaymentLoader);
          navigate("/success");
        } else {
          toast.error("Payment processing issue", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
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
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60   flex justify-center items-center z-50
${showPaymentLoader ? "hidden" : "block"}
      `}
      >
        <div class="payment-loader space-y-5 pt-5 bg-white rounded-xl">
          <div class="pad">
            <div class="chip"></div>
            <div class="line line1"></div>
            <div class="line line2"></div>
          </div>
          <p className="text-lg text-center">Payment processing...</p>
        </div>
      </div>
      <div className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"></div>
      <CheckoutSteps activeStep={2} />
      <div className="flex justify-center min-h-screen">
        <form
          action=""
          className="w-[30%] space-y-10"
          onSubmit={(e) => submitHandler(e)}
        >
          <label htmlFor="">Card Info</label>
          <div className="flex items-center px-2 border border-gray-900 rounded-lg h-10">
            <CreditCardIcon />
            {/* 4242 4242 4242 4242 */}
            <CardNumberElement className=" bg-transparent  text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" />
          </div>
          <div className="flex items-center px-2 border border-gray-900 rounded-lg h-10">
            <EventIcon />
            <CardExpiryElement className=" bg-transparent  text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" />
          </div>
          <div className="flex items-center px-2 border border-gray-900 rounded-lg h-10">
            <VpnKeyIcon />
            <CardCvcElement className=" bg-transparent  text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" />
          </div>
          <button
            type="submit"
            ref={payBtn}
            value="pay"
            className="mt-5 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 gap-4 flex justify-center items-center"
          >
            {`Pay - ${orderInfo && orderInfo.totalPrice}`}
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
