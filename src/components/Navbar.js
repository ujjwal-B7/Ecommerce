import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "../userComponent/Cart";
import Login from "../auth/Login";
import LogOut from "../auth/LogOut";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState();
  const location = useLocation();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } =
    useAuth0();
  const menuRef = useRef();
  const hamRef = useRef();
  useEffect(() => {
    let handle = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        setCart(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  });

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`fixed sm:h-20 h-28 w-full text-white z-50 md:${
        scrollPosition >= 600 ? "bg-[#333333]" : "bg-transparent"
      }
      ${scrollPosition >= 200 ? "bg-[#333333]" : "bg-transparent"}
      `}
    >
      <section className="max-w-7xl mx-auto flex flex-wrap h-20 justify-between items-center px-4">
        <h1 className="text-3xl font-bold" data-aos="fade-right">
          <Link to="/">SLASH</Link>
        </h1>
        <div className="flex items-center">
          <div
            className=" md:mr-5 sm:relative absolute sm:top-0 top-[4.5rem] right-9"
            data-aos="fade-left"
          >
            <input
              type="text"
              placeholder="Search items"
              className="rounded-md h-8  sm:w-96 w-[20rem] pl-2
            focus:outline-none focus:ring focus:ring-blue-200
            "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute right-4  top-2 text-gray-900">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
          <ul
            className="lg:flex items-center hidden text-sm gap-x-10"
            data-aos="fade-left"
          >
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">HOME</Link>
            </li>
            <li className={location.pathname === "/store" ? "active" : ""}>
              <Link to="/store">STORE</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li>
              <button onClick={() => setCart(!cart)}>
                <ion-icon name="cart" size="large"></ion-icon>
              </button>
            </li>
          </ul>
          <div className="lg:static absolute right-16 top-5">
            {!isAuthenticated ? <Login /> : <LogOut />}
          </div>
        </div>
        <ul
          ref={menuRef}
          className={`lg:hidden absolute text-gray-900  bg-white/95  shadow-black shadow-2xl
          rounded-bl-full w-[45%] h-screen top-0  ham  text-xl text-center pt-20 transition-all ease-in duration-300 
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
        <ul
          ref={menuRef}
          className={`absolute text-gray-900  bg-white shadow-2xl
          w-[30%] h-screen top-0 text-xl pt-5 transition-all ease-in duration-300 
          ${cart ? "right-0" : "right-[-45rem]"}
          `}
        >
          <Cart />
        </ul>
        <div
          ref={hamRef}
          className="lg:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "none" : "menu"}></ion-icon>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
