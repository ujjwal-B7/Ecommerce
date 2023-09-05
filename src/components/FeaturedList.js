import React from "react";

const FeaturedList = () => {
  return (
    <section className="max-w-7xl mx-auto pb-20 text-gray-600 lg:px-0 md:px-10">
      <p className="text-center font-semibold pt-10 pb-5 text-4xl">
        Featured Products
      </p>
      ;
      <div
        className="container grid lg:grid-cols-4 grid-cols-2 place-items-center lg:gap-32 sm:gap-y-20 gap-y-10  mx-auto"
        data-aos="slide-up"
        data-aos-duration="300"
      >
        <div
          className="lg:w-80 sm:w-60 w-40 relative px-5"
          data-aos="slide-up"
          data-aos-duration="300"
        >
          <img
            src="./images/watch2.jpg"
            className="img w-96 object-cover"
            alt=""
          />
        </div>
        <div
          className="lg:w-80 sm:w-60 w-40 relative px-5"
          data-aos="slide-up"
          data-aos-duration="300"
        >
          <img
            src="./images/cloth1.jpg"
            className="img w-96 object-cover"
            alt=""
          />
        </div>
        <div
          className="lg:w-80 sm:w-60 w-40 relative px-5"
          data-aos="slide-up"
          data-aos-duration="300"
        >
          <img
            src="./images/watch.jpg"
            className="img w-96 object-cover"
            alt=""
          />
        </div>
        <div
          className="lg:w-80 sm:w-60 w-40 relative px-5"
          data-aos="slide-up"
          data-aos-duration="300"
        >
          <img
            src="./images/shoes.jpg"
            className="img w-96 object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedList;
