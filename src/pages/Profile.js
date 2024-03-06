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
      <section className=" max-w-screen-xl mx-auto h-[80vh] flex justify-evenly items-center">
        <div className=" text-center">
          <h1 className="text-4xl text-gray-900 font-semibold">
            {user.name}
            {user.role === "admin" && (
              <span className="uppercase">[{user.role}]</span>
            )}
          </h1>
          <div className="h-60 w-60 rounded-full my-5">
            <img
              className="w-60 h-60 object-cover rounded-full"
              src={
                user.profile.url ? user.profile.url : "./images/defaultpic.jpg"
              }
              alt=""
            />
          </div>
          <div className="magenta rounded-lg w-60 text-white py-2">
            <Link to="/updateProfile">Edit Profile</Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl -text-gray-900">Email</h2>
            <p className=" text-lg">{user.email}</p>
          </div>
          <div>
            <h3>Joined On</h3>
            <p>{String(user.createdAt).substr(0, 10)}</p>
          </div>
          <div className="flex text-white text-center gap-4">
            <div className="bg-gray-900 rounded-lg w-60 py-2">
              <Link to="/orders">My Orders</Link>
            </div>
            <div className="bg-gray-900 rounded-lg w-60 py-2">
              <Link to="/updatePassword">Change Password</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
