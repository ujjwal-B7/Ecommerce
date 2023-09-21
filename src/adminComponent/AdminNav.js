import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../auth/LogOut";

const AdminNav = () => {
  return (
    <nav className="bg-gray-900 w-full h-20 px-10 fixed">
      <section className="max-w-8xl mx-auto flex flex-wrap h-20 justify-between items-center px-2">
        <h1
          className="text-3xl font-bold text-white pl-3"
          data-aos="fade-right"
        >
          <Link to="/admin">SLASH</Link>
        </h1>
        <div className="">
          <LogOut />
        </div>
      </section>
    </nav>
  );
};

export default AdminNav;
