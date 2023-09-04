import React from "react";
import Loader from "./Loader";

const QuicView = ({ click, setClick, closeQuickView }) => {
  return (
    <>
      <div className="fixed w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div
          className={` shadow-lg rounded-lg bg-text w-[55%] h-[60%] flex  
        ${click ? "hidden" : "block"}
      `}
          // data-aos="slide-up"
        >
          <img src="./images/converse.jpg" className="p-[2px]" alt="" />
          <section className="p-4 relative">
            <div
              className="absolute right-4 bg-gray-900 text-text rounded-full text-center w-5 h-5 hover:opacity-90"
              onClick={() => {
                setClick(!click);
                closeQuickView();
              }}
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <p className="text-3xl text-gray-900 font-semibold ">
              Converse All Star
            </p>
            <p>20$ & free shipping</p>
            <p className="text-justify pt-4 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium deleniti ipsa illo blanditiis! Distinctio rerum
              repudiandae consequuntur nobis, perferendis eligendi fugiat culpa
              quasi magni praesentium aut perspiciatis provident. Error,
              suscipit soluta! Velit pariatur blanditiis deleniti earum officia
              totam? Ullam officia tempore eaque at numquam et? Veniam adipisci
              aut excepturi praesentium!
            </p>
            <hr className="w-full my-3 border-gray-300" />
            <p>Category: Shoes</p>

            <div className="border rounded-md p-4 my-4">
              <p className="text-center">Payment Methods</p>
              <div className="flex justify-center gap-1">
                <img src="./images/card1.svg" alt="" className="h-10" />
                <img src="./images/card2.svg" alt="" className="h-10" />
                <img src="./images/card3.svg" alt="" className="h-10" />
                <img src="./images/card4.svg" alt="" className="h-10" />
              </div>
            </div>
            <button className="bg-gray-900 hover:opacity-90 text-white w-full h-10 rounded-md mt-2">
              Add to Cart
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default QuicView;
