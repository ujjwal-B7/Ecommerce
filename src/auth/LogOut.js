import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } =
    useAuth0();
  return (
    <button
      className="logout-btn h-8 w-8 overflow-clip rounded-full bg-white mt-2 ml-5 text-gray-900"
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
    >
      {user?.picture && (
        <img
          src={user.picture}
          alt={user?.name}
          className="h-10 w-10 object-cover rounded-full"
        />
      )}
      <p className="logout  hidden bg-white text-gray-900 w-14 rounded mt-1 absolute right-[8.6%] top-[3.2rem] text-center">
        Logout
      </p>
    </button>
  );
};

export default Login;
