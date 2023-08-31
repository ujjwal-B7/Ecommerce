import React from "react";

const QuicView = ({ click, setClick }) => {
  return (
    <div
      className={`absolute shadow-lg top-10 rounded-lg bg-text w-[70%] h-[30rem] flex 
    ${click ? "hidden" : "block"}
    `}
      data-aos="zoom-in"
    >
      <img src="./images/converse.jpg" className="p-[2px]  h-[30rem]" alt="" />
      <section className="p-4 relative">
        <div
          className="absolute right-4 bg-gray-900 text-text rounded-full text-center w-5 h-5 hover:opacity-90"
          onClick={() => setClick(!click)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <p className="text-3xl text-gray-900 font-semibold ">
          Converse All Star
        </p>
        <p>20$ & free shipping</p>
        <p className="text-justify pt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          deleniti ipsa illo blanditiis! Distinctio rerum repudiandae
          consequuntur nobis, perferendis eligendi fugiat culpa quasi magni
          praesentium aut perspiciatis provident. Error, suscipit soluta! Velit
          pariatur blanditiis deleniti earum officia totam? Ullam officia
          tempore eaque at numquam et? Veniam adipisci aut excepturi
          praesentium!
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
        <button className="bg-gray-900 hover:opacity-90 text-white w-full h-10 rounded-md ">
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default QuicView;
