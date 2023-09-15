import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="bg-gray-900 w-full h-20 flex justify-between items-center px-10 fixed">
      <h1 className="text-3xl font-bold text-white" data-aos="fade-right">
        <Link to="/">SLASH</Link>
      </h1>
      <button
        type="button"
        class="mr-3 text-sm bg-gray-800 rounded-full md:mr-0"
      >
        <img
          class="w-8 h-8 rounded-full"
          src="./images/slashimg.jpg"
          alt="user"
        />
      </button>
    </nav>
  );
};

export default AdminNav;
