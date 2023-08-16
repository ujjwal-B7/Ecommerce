import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-slate-200 ">
      <section className="max-w-7xl mx-auto w-full h-16 flex justify-between items-center">
        <h1>SLASH</h1>
        <ul className="flex gap-7">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Services</Link>
          </li>
          <li>
            <Link to="/home">About Us</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
