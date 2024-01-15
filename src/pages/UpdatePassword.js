import React from "react";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../store/actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../store/constants/userConstants";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isUpdated, loading, error } = useSelector(
    (state) => state.updateProfile
  );
  const [showPassword, setShowPassword] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // updatePassword form handler
  const updatePasswordSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm));
  };

  const updatePasswordDataChange = (e) => {};

  useEffect(() => {
    if (isUpdated) {
      navigate("/profile");
      dispatch({ type: UPDATE_PASSWORD_RESET });
    }
  }, [dispatch, isUpdated, navigate]);
  return (
    <section className=" max-w-screen-xl mx-auto h-[80vh] flex items-center">
      <form
        onSubmit={updatePasswordSubmit}
        className={`lg:w-[40%] sm:w-[60%] w-[90%] relative mx-auto bg-white p-5 rounded-xl shadow-xl
    `}
      >
        <div className="my-5">
          {error && <p className="text-red-500 text-md">{error}</p>}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Old password
            </label>
            <input
              type={showPassword ? "password" : "text"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="border border-gray-900 bg-transparent text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              New password
            </label>
            <input
              type={showPassword ? "password" : "text"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-gray-900 bg-transparent text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Confirm password
            </label>
            <input
              type={showPassword ? "password" : "text"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
        </div>
        <button
          type="submit"
          value="change"
          className="mt-4 text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 gap-4 flex justify-center items-center"
        >
          {loading && <span className="loader-btn"></span>}
          <p>Submit</p>
        </button>
      </form>
    </section>
  );
};

export default UpdatePassword;
