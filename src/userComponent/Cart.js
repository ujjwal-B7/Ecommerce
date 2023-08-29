import React from "react";

const Cart = () => {
  return (
    <section className="text-gray-900">
      <p className="text-3xl font-semibold pb-5 text-center">Cart</p>
      <div className="bg-[#f8f8f8] w-96 h-24 mx-auto rounded-md flex justify-around items-center mb-2">
        <img src="./images/converse.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          Converse
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="bg-[#f8f8f8] w-96 h-24 mx-auto rounded-md flex justify-around items-center mb-2">
        <img src="./images/bagss.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          Bagss
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="bg-[#f8f8f8] w-96 h-24 mx-auto rounded-md flex justify-around items-center mb-2">
        <img src="./images/fur6.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          flower
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="bg-[#f8f8f8] w-96 h-24 mx-auto rounded-md flex justify-around items-center mb-2">
        <img src="./images/fur5.jpg" alt="" className="h-20 w-16" />
        <p className="text-lg">
          Pot
          <span className="block text-xs text-gray-600">Color:black</span>
          <span className="block text-xs text-gray-600">Size:lg</span>
          <span className="block text-xs text-gray-600">Rs: 2000</span>
        </p>
        <div className="flex space-x-1">
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            -
          </button>
          <p className="border border-gray-900 h-8 w-8 text-gray-900 text-lg rounded-md p-1 text-center">
            8
          </p>
          <button className="bg-gray-600 h-8 w-8 text-white text-lg rounded-md">
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
