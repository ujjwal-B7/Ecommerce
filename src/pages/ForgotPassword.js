import React from "react";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../store/actions/userAction";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );

  // updateProfile form handler
  const forgotPasswordSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (message) {
      navigate("/");
    }
  }, [dispatch, message, navigate]);
  return (
    <>
      <Loader loading={loading} />
      <div
        className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"
        data-aos="zoom-in"
      ></div>
      <section className=" max-w-screen-xl mx-auto h-[80vh] ">
        <form
          onSubmit={forgotPasswordSubmit}
          className={`lg:w-[40%] sm:w-[60%] w-[90%] relative mx-auto bg-white p-5 rounded-xl shadow-xl
          `}
          // data-aos="fade-up"
        >
          <h1 className="text-gray-900">forgot password</h1>
          <div>
            <div className="my-5">
              <label
                htmlFor="email"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                // style={{ backgroundColor: "gray" }}
                placeholder="abc@gmail.com"
                required
              />
            </div>

            {/* <button
            disabled={password.length < 8 ? true : false}
            type="submit"
            value="updateProfile"
            className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 gap-4 flex justify-center items-center"
          >
            {loading && <span className="loader-btn"></span>}
            <p>Submit</p>
          </button> */}
            <button
              type="send"
              value="updateProfile"
              className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 gap-4 flex justify-center items-center"
            >
              {loading && <span className="loader-btn"></span>}
              <p>Submit</p>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgotPassword;
