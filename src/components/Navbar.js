import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "../userComponent/Cart";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
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
      ${scrollPosition >= 400 ? "bg-[#333333]" : "bg-transparent"}
      `}
    >
      <section className="max-w-7xl mx-auto flex flex-wrap h-20 justify-between items-center px-4">
        <h1 className="text-3xl font-bold" data-aos="fade-right">
          SLASH
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
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/store">STORE</Link>
            </li>
            <li>
              <Link to="/contact">ABOUT US</Link>
            </li>
            <li>
              <button onClick={() => setCart(!cart)}>
                <ion-icon name="cart" size="large"></ion-icon>
              </button>
            </li>
          </ul>
          <div className="lg:static absolute right-16 top-5">
            {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect()}
                className="log-btn bg-white rounded-full h-6 w-6 ml-10 text-gray-900"
                data-aos="fade-left"
              >
                <ion-icon name="person"></ion-icon>
                <p className="log hidden bg-white text-gray-900 w-14 rounded mt-1 absolute right-32 text-center">
                  Login
                </p>
              </button>
            ) : (
              <>
                <button
                  className="logout-btn h-10 w-10 rounded-full bg-white  ml-5 text-gray-900"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  {user?.picture && (
                    <img
                      src={user.picture}
                      alt={user?.name}
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  )}
                  <p className="logout hidden  bg-white text-gray-900 w-14 rounded mt-1 absolute right-[9%]   text-center">
                    Logout
                  </p>
                </button>
              </>
            )}
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
