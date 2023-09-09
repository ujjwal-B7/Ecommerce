import React from "react";
import { useState } from "react";
import DeleteConfirm from "../components/DeleteConfirm";
const Cart = ({ cart, setCart }) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [click, setClick] = useState(true);
  const toggleDeleteVisibility = () => {
    setIsDeleteVisible(!isDeleteVisible);
  };

  return (
    <section className="text-gray-900 cart relative z-50">
      <p className="text-3xl font-semibold py-5 text-center">Cart</p>
      <div
        className="absolute lg:hidden top-5 right-4  text-center text-3xl"
        onClick={() => setCart(!cart)}
      >
        <ion-icon name="close"></ion-icon>
      </div>
      <div className="bg-text md:w-[27rem] w-[23rem] h-24 mx-auto rounded-md flex justify-around items-center mb-2 ">
        <div
          className="h-5 w-5 rounded-full bg-gray-400 text-white text-center"
          //   onClick={toggleDeleteVisibility}
          onClick={() => setClick(!click)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <img src="./images/converse.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          Converse
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="bg-text md:w-[27rem] w-[23rem] h-24 mx-auto rounded-md flex justify-around items-center mb-2 ">
        <div
          className="h-5 w-5 rounded-full bg-gray-400 text-white text-center"
          onClick={() => setClick(!click)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <img src="./images/bagss.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          Bagss
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="bg-text md:w-[27rem] w-[23rem] h-24 mx-auto rounded-md flex justify-around items-center mb-2">
        <div
          className="h-5 w-5 rounded-full bg-gray-400 text-white text-center"
          onClick={() => setClick(!click)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <img src="./images/fur6.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          flower
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="bg-text md:w-[27rem] w-[23rem] h-24 mx-auto rounded-md flex justify-around items-center mb-2">
        <div
          className="h-5 w-5 rounded-full bg-gray-400 text-white text-center"
          onClick={() => setClick(!click)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <img src="./images/fur5.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          Pot
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
      <button className="bg-gray-900 text-white md:w-[27rem] w-[23rem] text-lg h-10 mx-4 hover:opacity-90 rounded-md sticky bottom-1">
        Confirm Order
      </button>
      <div className={` ${click ? "hidden" : "block"} `}>
        <DeleteConfirm click={click} setClick={setClick} />
      </div>

      {/* {isDeleteVisible && (
        <DeleteConfirm toggleDeleteVisibility={toggleDeleteVisibility} />
      )} */}
    </section>
  );
};

export default Cart;
