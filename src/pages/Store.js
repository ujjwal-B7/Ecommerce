import React from "react";
import { useState } from "react";
import QuicView from "../components/QuicView";
const Store = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      <div
        className="w-full lg:h-[50vh] h-[40vh] bg-[url('./images/store.jpg')] bg-cover mb-10"
        data-aos="zoom-in"
      >
        {/* <img
          src="./images/store.jpg"
          className=" w-full h-[50vh] object-cover"
          alt=""
          data-aos="zoom-in"
        /> */}
        <div className="w-full lg:h-[50vh] h-[40vh] bg-black opacity-40">
          <p className="text-white text-5xl font-semibold text-center pt-32">
            SHOP
            <p className=" text-sm mx-auto w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ab amet. Similique sed dolor
            </p>
          </p>
          ;
        </div>
      </div>
      <section className="max-w-7xl mx-auto pb-40 text-gray-600 lg:px-0 md:px-10 ">
        <p className="md:pl-2 pl-10 text-5xl font-semibold  py-10">SHOP</p>
        <div
          className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-32 md:gap-y-40 gap-32"
          data-aos="slide-up"
          data-aos-duration="300"
        >
          <div
            className=" products h-80 lg:w-96 w-80 relative "
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/converse.jpg"
                className="h-80 w-96 object-cover"
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
                  onClick={() => setClick(!click)}
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
            className=" h-80 lg:w-96 w-80 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/jaamaa.jpg"
                className="h-80 w-96 object-cover"
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
            className=" h-80 lg:w-96 w-80 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/bagss.jpg"
                className="h-80 w-96 object-cover"
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
            className=" h-80 lg:w-96 w-80 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/fur4.jpg"
                className="h-80 w-96 object-cover"
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
            className=" h-80 lg:w-96 w-80 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/fur2.jpg"
                className="h-80 w-96 object-cover"
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
            className=" h-80 lg:w-96 w-80 relative"
            data-aos="slide-up"
            data-aos-duration="300"
          >
            <div className="products overflow-hidden">
              <img
                src="./images/fur1.jpg"
                className="h-80 w-96 object-cover"
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
          <div className={` ${click ? "hidden" : "block"} `}>
            <QuicView click={click} setClick={setClick} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
