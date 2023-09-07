import React from "react";

const ProductsList = ({ click, setClick, openQuickView }) => {
  // const [click, setClick] = useState(true);

  return (
    <section className="max-w-7xl mx-auto pb-40 text-gray-600 lg:px-0 md:px-10 ">
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
                  openQuickView();
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
  );
};

export default ProductsList;
