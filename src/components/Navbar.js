import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>SLASH</h1>
        <ul>
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
      </nav>
    </header>
  );
};

export default Navbar;
