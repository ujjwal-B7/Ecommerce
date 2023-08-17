import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const hamRef = useRef();
  useEffect(() => {
    let handle = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  });
  return (
    <nav className="fixed h-20 w-full text-white z-50">
      <section className="max-w-7xl mx-auto flex flex-wrap h-20 justify-between items-center px-4">
        <div data-aos="fade-right">
          <h1 className="text-2xl font-bold">SLASH</h1>
        </div>
        <div className="flex items-center">
          <ul className="lg:flex hidden text-sm gap-x-10">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/service">SERVICE</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/cart">
                <span className="pr-1">
                  <ion-icon name="cart"></ion-icon>
                </span>
                CART
              </Link>
            </li>
          </ul>
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-white rounded-full h-6 w-6 ml-10 text-gray-900"
            >
              <ion-icon name="person"></ion-icon>
            </button>
          ) : (
            <button
              className="bg-white rounded-md px-2 text-gray-900"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              LOG OUT
            </button>
          )}
        </div>
        <ul
          ref={menuRef}
          className={`lg:hidden absolute text-gray-900  bg-white bg-opacity-30 backdrop-blur shadow-black shadow-2xl
          rounded-bl-full w-2/4 h-screen top-0  ham  text-xl text-center pt-20 transition-all ease-in duration-500
          ${open ? "right-0" : "right-[-32rem]"}
          `}
        >
          <li className="py-5 lg:py-0">
            <Link to="/">HOME</Link>
          </li>
          <li className="py-5 lg:py-0">
            <Link to="/service">SERVICE</Link>
          </li>
          <li className="py-5 lg:py-0 ">
            <span>
              <ion-icon name="cart"></ion-icon>
            </span>
            <Link to="/home">CART</Link>
          </li>
          <li className="py-5 lg:py-0">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div
          ref={hamRef}
          className="lg:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
