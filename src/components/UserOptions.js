import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/actions/userAction";
import { useDispatch } from "react-redux";
const UserOptions = ({ user }) => {
  const [options, setOptions] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // profile options
  const optionsArray = [
    {
      function: Orders,
      logo: <ion-icon name="gift-outline"></ion-icon>,
      option: "Orders",
    },
    {
      function: Profile,
      logo: <ion-icon name="person-circle-outline"></ion-icon>,
      option: "Profile",
    },
    {
      function: Logout,
      logo: <ion-icon name="log-out-outline"></ion-icon>,
      option: "Logout",
    },
  ];
  if (user.role === "admin") {
    // optionsArray.shift({
    //   function: Orders,
    //   logo: <ion-icon name="gift-outline"></ion-icon>,
    //   option: "Orders",
    // });
    optionsArray.unshift({
      function: Dashboard,
      logo: <ion-icon name="grid-outline"></ion-icon>,
      option: "Dashboard",
    });
  }

  function Profile() {
    setOptions(!options);
    navigate("/profile");
  }
  function Orders() {
    setOptions(!options);
    navigate("/myOrders");
  }
  function Dashboard() {
    setOptions(!options);
    navigate("/admin/dashboard");
  }
  function Logout() {
    setOptions(!options);
    dispatch(logOut());
    navigate("/");
  }
  return (
    <>
      <div
        className="flex items-center caret-down"
        onClick={() => setOptions(!options)}
      >
        <img
          src={user.profile.url ? user.profile.url : "./images/defaultpic.jpg"}
          className="h-9 w-9 rounded-full object-cover"
          alt=""
        />
        <span className="self-end">
          <ion-icon name="caret-down-outline"></ion-icon>
        </span>
      </div>
      <div
        className={`bg-white w-36 rounded-lg shadow-lg absolute top-16
        ${options ? "hidden" : "block"}`}
      >
        {optionsArray.map((option) => (
          <div
            className="dropdown space-x-4 p-2 hover:bg-slate-200 rounded-lg"
            onClick={option.function}
          >
            <span className="">{option.logo}</span>
            <span key={option.option} className="cursor-pointer">
              {option.option}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserOptions;
