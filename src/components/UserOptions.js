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
    { function: Profile, option: "Profile" },
    { function: Orders, option: "Orders" },
    { function: Logout, option: "Logout" },
  ];
  if (user.role === "admin") {
    optionsArray.unshift({ function: Dashboard, option: "Dashboard" });
  }

  function Profile() {
    setOptions(!options);
    navigate("/profile");
  }
  function Orders() {
    setOptions(!options);
    navigate("/orders");
  }
  function Dashboard() {
    setOptions(!options);
    navigate("/dashboard");
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
        className={`bg-white w-32 rounded-xl shadow-lg text-center absolute right-20 top-16
        ${options ? "hidden" : "block"}`}
      >
        {optionsArray.map((option) => (
          <p
            key={option.option}
            className="cursor-pointer hover:bg-slate-200"
            onClick={option.function}
          >
            {option.option}
          </p>
        ))}
      </div>
    </>
  );
};

export default UserOptions;
