import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkOutOrder } from "../store/actions/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
const ShippingInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [state, setState] = useState(shippingInfo.state);

  const shippingSubmitHandler = (e) => {
    e.preventDefault();
    if (phoneNo.length > 10 || phoneNo.length < 10) {
      toast.error("Phone number must be ten digit long", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch(
      checkOutOrder({
        address,
        city,
        state,
        phoneNo,
      })
    );
    navigate("/confirmOrder");
  };
  return (
    <>
      {/* <Loader loading={loading} /> */}
      <div
        className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"
        data-aos="zoom-in"
      ></div>
      <CheckoutSteps activeStep={0} />
      <section>
        <h1 className="text-center">Shipping Details</h1>
        <form
          encType="multipart/form-data"
          onSubmit={shippingSubmitHandler}
          className={`w-[30rem] relative mx-auto p-5 rounded-xl
          `}
          // data-aos="fade-up"
        >
          {/* <div className="text-gray-900 h-5 w-5 pl-[1px] hover:bg-gray-400 absolute right-2 top-2 rounded-full">
          <ion-icon name="close" size="small"></ion-icon>
        </div> */}
          <div>
            <div className="my-5">
              <label
                htmlFor="text"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                placeholder="Address"
                required
              />
            </div>
            <div className="my-5">
              <label
                htmlFor=""
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="City"
                required
              />
            </div>
            <div className="my-5">
              <label
                htmlFor=""
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                State
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="State"
                required
              />
            </div>
            <div className="my-5">
              <label
                htmlFor=""
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Number"
                size={10}
                required
              />
            </div>

            <button
              type="submit"
              value="Confirm"
              className="mt-5 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 gap-4 flex justify-center items-center"
            >
              {/* {loading && <span className="loader-btn"></span>} */}
              <p>Continue</p>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ShippingInfo;
