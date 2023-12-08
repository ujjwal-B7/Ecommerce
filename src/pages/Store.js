import React from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import ScrollToTop from "react-scroll-to-top";

const Store = () => {
  const [click, setClick] = useState(true);
  const [search, setSearch] = useState();
  return (
    <>
      <Loader />
      <div
        className="w-full lg:h-[40vh] h-[30vh] bg-[url('./images/store.jpg')] bg-cover mb-2"
        data-aos="zoom-in"
      >
        <div className="w-full lg:h-[40vh] h-[30vh] bg-black bg-opacity-40 pt-20">
          <p className="text-white text-5xl font-semibold text-center py-10">
            SHOP
            <span className="block text-sm mx-auto w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            </span>
          </p>
        </div>
      </div>
      <section className="max-w-7xl mx-auto pb-40 text-gray-600">
        <div
          className="w-[70%] mx-auto sticky top-[5.1rem] z-40"
          data-aos="zoom-in"
        >
          <input
            type="text"
            placeholder="Search items"
            className="border-blue-200 border-[3px] bg-text rounded-md h-11 w-full pl-2
            focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-1
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-4  top-4 text-gray-900">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <p className="text-center pt-10 pb-5 text-4xl">New Arrivals</p>;
        <div
          className="container grid lg:grid-cols-3 grid-cols-2 place-items-center lg:gap-x-10 md:gap-y-40 gap-y-20 mx-auto"
          data-aos="slide-up"
          data-aos-duration="300"
        >
          <div
            className="h-80 lg:w-[90%] sm:w-80 w-40"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/converse.jpg"
                className="sm:h-80 sm:w-96 object-cover"
                alt=""
              />
              <div className="hover-content1">
                <p className="text1 hidden absolute top-6 right-14 text-sm bg-gray-900 text-white px-1 rounded">
                  Add to cart
                </p>
                <img
                  id="cart"
                  src="./images/cart.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-5 right-5"
                />
              </div>
              <div className="hover-content2">
                <p className="text2 hidden absolute top-[3.7rem] right-14 text-sm bg-gray-900 text-white rounded px-1">
                  Quick View
                </p>
                <img
                  id="eye"
                  src="./images/eye.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-14 right-5"
                  onClick={() => {
                    setClick(!click);
                  }}
                />
              </div>
            </div>
            <p className="font-semibold text-gray-900 pt-4">
              Simple Black in wooden chair
              <span className="block text-gray-600">69$</span>
              <span className="font-medium text-gray-600">
                This is a comfortable chair made of up wood ..
              </span>
            </p>
          </div>
          <div
            className="h-80 lg:w-[90%] sm:w-80 w-40  relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/jaamaa.jpg"
                className="sm:h-80 sm:w-96 object-cover"
                alt=""
              />
              <div className="hover-content1">
                <p className="text1 hidden absolute top-6 right-14 text-sm bg-gray-900 text-white px-1 rounded">
                  Add to cart
                </p>
                <img
                  id="cart"
                  src="./images/cart.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-5 right-5"
                />
              </div>
              <div className="hover-content2">
                <p className="text2 hidden absolute top-[3.7rem] right-14 text-sm bg-gray-900 text-white rounded px-1">
                  Quick View
                </p>
                <img
                  id="eye"
                  src="./images/eye.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-14 right-5"
                />
              </div>
            </div>
            <p className="font-semibold text-gray-900 pt-4">
              Simple Black in wooden chair
              <span className="block text-gray-600">69$</span>
              <span className="font-medium text-gray-600">
                This is a comfortable chair made of up wood ..
              </span>
            </p>
          </div>

          <div
            className=" h-80 lg:w-[90%] sm:w-80 w-40 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/bagss.jpg"
                className="sm:h-80 sm:w-96 object-cover"
                alt=""
              />
              <div className="hover-content1">
                <p className="text1 hidden absolute top-6 right-14 text-sm bg-gray-900 text-white px-1 rounded">
                  Add to cart
                </p>
                <img
                  id="cart"
                  src="./images/cart.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-5 right-5"
                />
              </div>
              <div className="hover-content2">
                <p className="text2 hidden absolute top-[3.7rem] right-14 text-sm bg-gray-900 text-white rounded px-1">
                  Quick View
                </p>
                <img
                  id="eye"
                  src="./images/eye.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-14 right-5"
                />
              </div>
            </div>
            <p className="font-semibold text-gray-900 pt-4">
              Simple Black in wooden chair
              <span className="block text-gray-600">69$</span>
              <span className="font-medium text-gray-600">
                This is a comfortable chair made of up wood ..
              </span>
            </p>
          </div>

          <div
            className=" h-80 lg:w-[90%] sm:w-80 w-40 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/fur4.jpg"
                className="sm:h-80 sm:w-96 h-52 object-cover"
                alt=""
              />
              <div className="hover-content1">
                <p className="text1 hidden absolute top-6 right-14 text-sm bg-gray-900 text-white px-1 rounded">
                  Add to cart
                </p>
                <img
                  id="cart"
                  src="./images/cart.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-5 right-5"
                />
              </div>
              <div className="hover-content2">
                <p className="text2 hidden absolute top-[3.7rem] right-14 text-sm bg-gray-900 text-white rounded px-1">
                  Quick View
                </p>
                <img
                  id="eye"
                  src="./images/eye.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-14 right-5"
                />
              </div>
            </div>
            <p className="font-semibold text-gray-900 pt-4">
              Simple Black in wooden chair
              <span className="block text-gray-600">69$</span>
              <span className="font-medium text-gray-600">
                This is a comfortable chair made of up wood ..
              </span>
            </p>
          </div>
          <div
            className=" h-80 lg:w-[90%] sm:w-80 w-40 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/fur2.jpg"
                className="sm:h-80 sm:w-96 h-52 object-cover"
                alt=""
              />
              <div className="hover-content1">
                <p className="text1 hidden absolute top-6 right-14 text-sm bg-gray-900 text-white px-1 rounded">
                  Add to cart
                </p>
                <img
                  id="cart"
                  src="./images/cart.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-5 right-5"
                />
              </div>
              <div className="hover-content2">
                <p className="text2 hidden absolute top-[3.7rem] right-14 text-sm bg-gray-900 text-white rounded px-1">
                  Quick View
                </p>
                <img
                  id="eye"
                  src="./images/eye.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-14 right-5"
                />
              </div>
            </div>
            <p className="font-semibold text-gray-900 pt-4">
              Simple Black in wooden chair
              <span className="block text-gray-600">69$</span>
              <span className="font-medium text-gray-600">
                This is a comfortable chair made of up wood ..
              </span>
            </p>
          </div>
          <div
            className="h-80 lg:w-[90%] sm:w-80 w-40 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/fur1.jpg"
                className="sm:h-80 h-52 sm:w-96 object-cover"
                alt=""
              />
              <div className="hover-content1">
                <p className="text1 hidden absolute top-6 right-14 text-sm bg-gray-900 text-white px-1 rounded">
                  Add to cart
                </p>
                <img
                  id="cart"
                  src="./images/cart.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-5 right-5"
                />
              </div>
              <div className="hover-content2">
                <p className="text2 hidden absolute top-[3.7rem] right-14 text-sm bg-gray-900 text-white rounded px-1">
                  Quick View
                </p>
                <img
                  id="eye"
                  src="./images/eye.svg"
                  alt=""
                  className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-14 right-5"
                />
              </div>
            </div>
            <p className="font-semibold text-gray-900 pt-4">
              Simple Black in wooden chair
              <span className="block text-gray-600">69$</span>
              <span className="font-medium text-gray-600">
                This is a comfortable chair made of up wood ..
              </span>
            </p>
          </div>
          {/* <div className={` ${click ? "hidden" : "block"} `}>
          <QuicView click={click} setClick={setClick} />
        </div> */}
        </div>
      </section>
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#111827",
          padding: "5px",
        }}
      />
    </>
  );
};

export default Store;
