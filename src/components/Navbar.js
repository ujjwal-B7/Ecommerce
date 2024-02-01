import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Cart from "../pages/Cart";
import Notifications from "../pages/Notifications";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const location = useLocation();
  const menuRef = useRef();
  const hamRef = useRef();
  const { cartItems } = useSelector((state) => state.cart);
  // useEffect(() => {
  //   let handle = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //       setshowCart(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handle);
  //   return () => document.removeEventListener("mousedown", handle);
  // });
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const fetchedCartItems = JSON.parse(localStorage.getItem("addedCartItems"));

  useEffect(() => {
    let handle = (e) => {
      if (
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
        // && !["INPUT", "BUTTON"].includes(e.target.tagName)
      ) {
        setOpen(false);
        setShowCart(false);
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
  if (pathname === "/admin/dashboard") return null;
  if (pathname === "/admin/addProducts") return null;
  if (pathname === "/admin/users") return null;
  if (pathname === "/admin/products") return null;
  if (pathname === "/admin/orders") return null;
  if (pathname === "/updatePassword") return null;
  return (
    <nav
      className={`fixed h-20 w-full text-white z-50 md:${
        scrollPosition >= 600 ? "bg-gray-900" : "bg-transparent"
      }
      ${scrollPosition >= 200 ? "bg-gray-900" : "bg-transparent"}
      `}
    >
      <section className="max-w-screen-xl mx-auto flex flex-wrap h-20 justify-between items-center px-4">
        <h1 className=" text-3xl font-bold" data-aos="fade-right">
          <Link to="/" className="logo">NEWPINCH</Link>
        </h1>
        <div className="flex items-center">
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
              <p className="text-xs h-6 w-6 text-white rounded-full absolute bottom-5 left-6 font-semibold">
                0
              </p>
            </li>
            <li className="relative">
              <button
                className={`cartIcon ${
                  fetchedCartItems.length > 0 ? "text-slate-200" : "text-white"
                }`}
                onClick={() => setShowCart(!showCart)}
              >
                <ion-icon name="cart"></ion-icon>
              </button>
              <p className="text-md h-6 w-6 text-white rounded-full absolute bottom-6 left-8 font-semibold">
                {fetchedCartItems.length}
              </p>
            </li>
          </ul>
          <div>
            {isAuthenticated ? (
              <>
                <div className="lg:static absolute right-2 top-5 log-btn  rounded-full ml-10 text-gray-900">
                  <UserOptions user={user} />
                </div>
              </>
            ) : (
              <div
                className="lg:static absolute right-4 top-5 log-btn bg-white rounded-full h-9 w-9 ml-10 text-gray-900 bg-[url('./images/defaultpic.jpg')] bg-cover"
                onClick={() => setShowForm(!showForm)}
              ></div>
            )}
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
            <button
              className="lg:hidden "
              onClick={() => setShowCart(!showCart)}
            >
              <ion-icon name="Cart" size="large"></ion-icon>
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
          ${showCart ? "right-0" : "right-[-55rem]"}
          `}
        >
          <Cart showCart={showCart} setShowCart={setShowCart} />
        </ul>
        <div
          ref={hamRef}
          className="lg:hidden text-3xl text-white lg:p-0 pr-14"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "none" : "menu"}></ion-icon>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
