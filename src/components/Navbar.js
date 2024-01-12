import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "../userComponent/Cart";
import Notifications from "../userComponent/Notifications";
import Login from "../auth/Login";
import LogOut from "../auth/LogOut";
import MessageBox from "./MessageBox";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [search, setSearch] = useState();
  const [showForm, setShowForm] = useState(true);
  const location = useLocation();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } =
    useAuth0();
  const menuRef = useRef();
  const hamRef = useRef();

  // useEffect(() => {
  //   let handle = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //       setCart(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handle);
  //   return () => document.removeEventListener("mousedown", handle);
  // });

  useEffect(() => {
    let handle = (e) => {
      if (
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
        // && !["INPUT", "BUTTON"].includes(e.target.tagName)
      ) {
        setOpen(false);
        setCart(false);
        setNotifications(false);
        // setShowForm(true);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [menuRef]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);

  // for component handling
  if (pathname === "/admin") return null;
  if (pathname === "/admin/notification") return null;
  if (pathname === "/admin/user") return null;
  if (pathname === "/admin/product") return null;
  if (pathname === "/admin/inbox") return null;
  return (
    <nav
      className={`fixed h-20 w-full text-white z-50 md:${
        scrollPosition >= 600 ? "bg-gray-900" : "bg-transparent"
      }
      ${scrollPosition >= 200 ? "bg-gray-900" : "bg-transparent"}
      `}
    >
      <section className="max-w-screen-xl mx-auto flex flex-wrap h-20 justify-between items-center px-4">
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
            <li className="notification relative">
              <button onClick={() => setNotifications(!notifications)}>
                <ion-icon name="notifications"></ion-icon>
              </button>
              <p className="text-xs h-6 w-6 bg-white p-1 text-gray-900 rounded-full absolute bottom-5 left-6 font-semibold">
                10
              </p>
            </li>
            <li className="relative">
              <button onClick={() => setCart(!cart)}>
                <ion-icon name="cart" size="large"></ion-icon>
              </button>
              <p className="text-xs h-6 w-6 bg-white p-1 text-gray-900 rounded-full absolute bottom-6 left-8 font-semibold">
                10
              </p>
            </li>
          </ul>
          <div
            className="lg:static absolute right-5 log-btn bg-white rounded-full h-6 w-6 ml-10 pl-1 text-gray-900"
            data-aos="fade-left"
            onClick={() => setShowForm(!showForm)}
          >
            {/* {!isAuthenticated ? <Login /> : <LogOut />} */}
            <ion-icon name="person"></ion-icon>
          </div>
          <div
            ref={menuRef}
            className={` ${showForm ? "hidden" : "block"} 
      `}
          >
            <LoginForm showForm={showForm} setShowForm={setShowForm} />
          </div>

          <div className="lg:static absolute right-40">
            <button
              className="lg:hidden "
              onClick={() => setNotifications(!notifications)}
            >
              <ion-icon name="notifications" size="large"></ion-icon>
            </button>
          </div>
          <div className="lg:static absolute right-28">
            <button className="lg:hidden " onClick={() => setCart(!cart)}>
              <ion-icon name="cart" size="large"></ion-icon>
            </button>
          </div>
        </div>
        {/* mobile menus */}
        <ul
          ref={menuRef}
          className={`lg:hidden absolute text-gray-900  bg-[#FAF9F6]  shadow-black shadow-2xl
          rounded-bl-3xl sm:w-[50%] w-[70%] h-screen top-0  ham  text-xl text-center pt-20 transition-all ease-in duration-300 z-[1000]
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
          ${notifications ? "right-0" : "right-[-45rem]"}
          `}
        >
          <Notifications
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </ul>
        <ul
          ref={menuRef}
          className={`absolute text-gray-900 overflow-y-auto bg-white shadow-2xl
          lg:w-[30%] md:w-[55%] w-full h-screen top-0 text-xl transition-all ease-in duration-300 
          ${cart ? "right-0" : "right-[-55rem]"}
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
