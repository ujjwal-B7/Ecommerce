import React from "react";

const ProductsList = () => {
  return (
    <section className="max-w-7xl mx-auto pb-20 text-gray-600">
      <p className="text-center pt-10">New Arrivals</p>;
      <div className="grid lg:grid-cols-3 grid-cols-2">
        <div>
          <div className="products h-80 w-96 relative">
            <img
              src="./images/fur2.jpg"
              className="h-80 w-96 object-cover"
              alt=""
            />
            <p className=" absolute top-6 right-14 text-sm bg-gray-900 text-white px-1 rounded">
              Add to cart
            </p>
            <p className="absolute top-[3.7rem] right-14 text-sm bg-gray-900 text-white rounded px-1">
              Quick View
            </p>
            <img
              src="./images/cart.svg"
              alt=""
              className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-5 right-5"
            />
            <img
              src="./images/eye.svg"
              alt=""
              className="hover hidden rounded-full absolute h-6 p-1 shadow-lg w-6 bg-white top-14 right-5"
            />
          </div>
          <p className="font-semibold text-gray-900">
            Simple Black in wooden chair
            <span className="block text-gray-600">69$</span>
            <span className="font-medium text-gray-600">
              This is a comfortable chair made of up wood ..
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
