import React from "react";
import { useState, useRef, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginUser } from "../store/actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginForm = ({ showForm, setShowForm }) => {
  const [formContainer, setFormContainer] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [shiftToRegister, setShiftToRegister] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginForm = useRef(null);
  // dispatching the function
  const dispatch = useDispatch();

  // login form handler
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginEmail, loginPassword));
    toast.success("Logged in successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      setShowForm(true);
    }
  }, [isAuthenticated, setShowForm, showForm]);
  return (
    <>
      <ToastContainer />
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 flex justify-center items-center z-50
      `}
      >
        <form
          ref={loginForm}
          onSubmit={loginSubmit}
          className={`lg:w-[27%] sm:w-[60%] w-[90%] relative mx-auto bg-white p-5 rounded-xl shadow-xl
         ${showForm ? "hidden" : "block"}
         ${shiftToRegister ? "hidden" : "block"}
        `}
          // data-aos="zoom-in"
        >
          <div
            className="text-gray-900 h-5 w-5 pl-[1px] hover:bg-gray-400 absolute right-2 top-2 rounded-full"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            <ion-icon name="close" size="small"></ion-icon>
          </div>
          <p className="text-center text-gray-900 text-xl font-semibold">
            Login Form
          </p>
          <div className="my-5">
            <label
              htmlFor="email"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              // style={{ backgroundColor: "gray" }}
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Your password
            </label>
            <input
              type={showPassword ? "password" : "text"}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="border border-gray-900 bg-transparent text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                value=""
                className="text-gray-900 w-3 h-3 mt-[5px] border bg-transparent border-gray-900 rounded focus:ring-3 focus:ring-gray-300 "
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-md  text-gray-900">
              show password
            </label>
          </div>
          <button
            type="submit"
            value="Login"
            disabled={loading ? true : false}
            className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 gap-4 flex justify-center items-center"
          >
            {loading && <span className="loader-btn"></span>}
            <p>Submit</p>
          </button>
          <Link
            to="/password/forgot"
            className="text-blue-900  text-sm pt-2 hover:underline cursor-pointer"
          >
            Forgot Password?
          </Link>
          <p
            className="text-center font-semibold underline cursor-pointer text-gray-900 text-sm pt-5"
            onClick={() => {
              setShowRegisterForm(!showRegisterForm);
              setShiftToRegister(!shiftToRegister);
            }}
          >
            Register Account
          </p>
        </form>

        <RegisterForm
          showPassword={setShowForm}
          setShowPassword={setShowPassword}
          showRegisterForm={showRegisterForm}
          setShowRegisterForm={setShowRegisterForm}
          shiftToRegister={shiftToRegister}
          setShiftToRegister={setShiftToRegister}
          setShowForm={setShowForm}
        />
      </div>
    </>
  );
};

export default LoginForm;
