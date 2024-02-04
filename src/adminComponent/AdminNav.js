import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="bg-[#4f5467] shadow-lg w-full h-20 px-10 fixed top-0 z-50">
      <section className="max-w-8xl mx-auto flex flex-wrap h-20 justify-between items-center px-2">
        <h1
          className="text-3xl font-bold text-white pl-3"
          data-aos="fade-right"
        >
          <Link to="/">NEWPINCH</Link>
        </h1>
        <div className=""></div>
      </section>
    </nav>
  );
};

export default AdminNav;
