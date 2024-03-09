import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, registerUser } from "../store/actions/userAction";
import defaultpic from "../images/defaultpic.jpg";
const RegisterForm = ({
  showRegisterForm,
  setShowRegisterForm,
  shiftToRegister,
  setShiftToRegister,
  setShowForm,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  // const [profile, setProfile] = useState("./images/defaultpic.jpg");
  // const [profilePreview, setProfilePreview] = useState("/Profile.png");
  // error
  const [errors, setErrors] = useState({
    password: "",
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { name, email, password } = user;
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  // register form handler
  const registerForm = useRef(null);
  const registerSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    // myForm.set("profile", profile);
    dispatch(registerUser(myForm));
  };

  const registerDataChange = (e) => {
    // if (e.target.name === "profile") {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     //readystates=> 0:initial state,1:processing,2:done
    //     if (reader.readyState === 2) {
    //       const profileUrl = reader.result;
    //       setProfilePreview(profileUrl);
    //       setProfile(profileUrl);
    //     }
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    // } else {
      setUser({ ...user, [e.target.name]: e.target.value });
      setErrors({
        ...errors,
        [e.target.name]:
          e.target.value.length < 8 ? "Must be at least 8 characters" : "",
      });
    // }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setShowForm(true);
      setShowRegisterForm(true);
    }
  }, [setShowRegisterForm, isAuthenticated, setShowForm]);

  return (
    <>
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
            {error && <p className="text-red-500 text-md">{error}</p>}
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
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
          {/* <label htmlFor="profile" className="text-gray-900">
            Upload a photo
          </label>
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
          </div> */}
          {/* <button
            disabled={password.length < 8 ? true : false}
            type="submit"
            value="Register"
            className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 gap-4 flex justify-center items-center"
          >
            {loading && <span className="loader-btn"></span>}
            <p>Submit</p>
          </button> */}
          <button
            disabled={password.length < 8}
            type="submit"
            value="Register"
            style={{
              opacity: password.length < 8 ? 0.5 : 1,
              cursor: password.length < 8 ? "not-allowed" : "pointer",
            }}
            className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 gap-4 flex justify-center items-center"
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
