import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } =
    useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="log-btn bg-white rounded-full h-6 w-6 ml-10 text-gray-900"
      data-aos="fade-left"
    >
      <ion-icon name="person"></ion-icon>
      <p className="log hidden bg-white text-gray-900 w-14 rounded mt-1 absolute right-32 text-center">
        Login
      </p>
    </button>
  );
};

export default Login;