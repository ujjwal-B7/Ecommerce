import React from "react";

const LoginForm = ({ showForm, setShowForm }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-50
      `}
      >
        <form
          className={`max-w-sm relative mx-auto bg-white/90 w-11/12 p-5 rounded-xl
         ${showForm ? "hidden" : "block"}
        `}
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
              for="email"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              className=" border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              style={{ backgroundColor: "red" }}
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-md font-semibold text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-900 rounded focus:ring-3 focus:ring-gray-300 "
                required
              />
            </div>
            <label for="remember" className="ms-2 text-md text-gray-900">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
