import React from "react";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const UserInfo = () => {
  const { user, loading } = useSelector((state) => state.user);
  return (
    <>
      <Loader loading={loading} />
      <div
        className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"
        data-aos="zoom-in"
      ></div>
      <section className=" max-w-screen-xl mx-auto h-screen">
        <div className="">
          <h1>{user.name}</h1>
          <img
            src={
              user.profile.url ? user.profile.url : "./images/defaultpic.jpg"
            }
            alt=""
          />
          <Link to="/updateProfile">Edit Profile</Link>
        </div>
        <div>
          <h2>Email</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <h3>Joined On</h3>
          <p>{String(user.createdAt).substr(0, 10)}</p>
        </div>
        <div>
          <Link to="/orders">My Orders</Link>
          <Link to="/updatePassword">Change Password</Link>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
