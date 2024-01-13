import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, registerUser } from "../store/actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterForm = ({
  showRegisterForm,
  setShowRegisterForm,
  shiftToRegister,
  setShiftToRegister,
  setShowForm,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [profile, setProfile] = useState();
  const [profilePreview, setProfilePreview] = useState("/Profile.png");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { name, email, password } = user;
  // register form handler
  const registerForm = useRef(null);
  // register form handler
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("profile", profile);
    dispatch(registerUser(myForm));
    toast.success("User Registered successfully", {
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

  const registerDataChange = (e) => {
    if (e.target.name === "profile") {
      const reader = new FileReader();
      reader.onload = () => {
        //readystates=> 0:initial state,1:processing,2:done
        if (reader.readyState === 2) {
          setProfilePreview(reader.result);
          setProfile(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      setShowForm(true);
      setShowRegisterForm(true);
    }
  }, [setShowRegisterForm, isAuthenticated, setShowForm]);
  return (
    <>
      <ToastContainer />
      <form
        ref={registerForm}
        encType="multipart/form-data"
        onSubmit={registerSubmit}
        className={`lg:w-[27%] sm:w-[60%] w-[90%] relative mx-auto bg-white p-5 rounded-xl shadow-xl
          ${showRegisterForm ? "hidden" : "block"}
        `}
        // data-aos="fade-up"
      >
        {/* <div className="text-gray-900 h-5 w-5 pl-[1px] hover:bg-gray-400 absolute right-2 top-2 rounded-full">
          <ion-icon name="close" size="small"></ion-icon>
        </div> */}
        <div>
          <p className="text-center text-gray-900 text-xl font-semibold">
            Register Your Account
          </p>
          <div className="my-5">
            <label
              htmlFor="text"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={registerDataChange}
              className=" border border-gray-900 bg-transparent  text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              // style={{ backgroundColor: "gray" }}
              placeholder="Name"
              required
            />
          </div>
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
              onChange={registerDataChange}
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
              name="password"
              value={password}
              onChange={registerDataChange}
              className="border border-gray-900 bg-transparent text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Confirm Your password
            </label>
            <input
              type={showPassword ? "password" : "text"}
              id="password"
              className="border border-gray-900 bg-transparent text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div> */}
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
          <div id="registerImage" className="flex items-center gap-7">
            <div className="pic ">
              <input
                className="rounded-xl"
                type="file"
                name="profile"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
            <div className=" h-12 w-12">
              <img
                className="rounded-full h-12 w-12 object-cover"
                src={profile}
                alt=""
              />
            </div>
          </div>
          <button
            disabled={loading ? true : false}
            type="submit"
            value="Register"
            // disabled={loading ? true : false}
            className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 gap-4 flex justify-center items-center"
          >
            {loading && <span className="loader-btn"></span>}
            <p>Submit</p>
          </button>
          <p
            className="text-gray-900 text-center pt-5 font-semibold text-sm cursor-pointer underline"
            onClick={() => {
              setShowRegisterForm(!showRegisterForm);
              setShiftToRegister(!shiftToRegister);
            }}
          >
            Login instead
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
