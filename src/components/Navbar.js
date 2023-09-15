import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "../userComponent/Cart";
import Login from "../auth/Login";
import LogOut from "../auth/LogOut";
import MessageBox from "./MessageBox";

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState();
  const [showLoggedInMessage, setShowLoggedInMessage] = useState(false);
  const [showLoggedOutMessage, setShowLoggedOutMessage] = useState(false);
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

  useEffect(() => {
    if (isAuthenticated) {
      setShowLoggedInMessage(true);
      setTimeout(() => setShowLoggedInMessage(false), 2000);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLoggedOutMessage(true);
      setTimeout(() => setShowLoggedOutMessage(false), 2000);
    }
  }, [isAuthenticated]);

  // for component handling
  if (pathname === "/admin") return null;
  if (pathname === "/admin/adminNav") return null;

  return (
    <nav
      className={`fixed h-20 w-full text-white z-50 md:${
        scrollPosition >= 600 ? "bg-gray-900" : "bg-transparent"
      }
      ${scrollPosition >= 200 ? "bg-gray-900" : "bg-transparent"}
      `}
    >
      <section className="max-w-7xl mx-auto flex flex-wrap h-20 justify-between items-center px-4">
        {showLoggedInMessage && (
          <MessageBox message="Logged in successfully!" />
        )}
        {showLoggedOutMessage && (
          <MessageBox message="Logged out successfully!" />
        )}
        <h1 className="text-3xl font-bold" data-aos="fade-right">
          <Link to="/">SLASH</Link>
        </h1>
        <div className="flex items-center">
          {/* <div
            className="md:mr-5 sm:relative fixed sm:top-0 top-[4.5rem] right-10"
            data-aos="fade-left"
          >
            <input
              type="text"
              placeholder="Search items"
              className=" rounded-md h-8  sm:w-96 w-80 pl-2
            focus:outline-none focus:ring focus:ring-blue-200
            "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute right-4  top-2 text-gray-900">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div> */}
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
          <div className="lg:static absolute right-5">
            {!isAuthenticated ? <Login /> : <LogOut />}
          </div>
          <div className="lg:static absolute right-32">
            <button className="lg:hidden " onClick={() => setCart(!cart)}>
              <ion-icon name="cart" size="large"></ion-icon>
            </button>
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
            <Link to="/store">STORE</Link>
          </li>
          <li className="py-5 lg:py-0">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="py-5 lg:py-0">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
        <ul
          ref={menuRef}
          className={`absolute text-gray-900 overflow-y-auto bg-white shadow-2xl
          lg:w-[30%] md:w-[55%] w-full h-screen top-0 text-xl transition-all ease-in duration-300 
          ${cart ? "right-0" : "right-[-45rem]"}
          `}
        >
          <Cart cart={cart} setCart={setCart} />
        </ul>
        <div
          ref={hamRef}
          className="lg:hidden text-3xl text-white lg:p-0 pr-12"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "none" : "menu"}></ion-icon>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
