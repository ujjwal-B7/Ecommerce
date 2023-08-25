import React from "react";
import ProductsList from "../components/ProductsList";
const Home = () => {
  return (
    <>
      <div className="lg:h-screen h-[60vh] w-full bg-[url('./images/main.jpg')] bg-cover">
        <div className="lg:h-screen h-[60vh] w-full bg-black bg-opacity-40">
          <div
            className="text-white max-w-7xl mx-auto  px-4 sm:pt-80 pt-[50%]"
            data-aos="slide-up"
          >
            <p className="sm:text-6xl text-4xl font-semibold w-[70%] pb-4">
              Stay productive and get more work done!
            </p>
            <button className="h-10 w-32 bg-black rounded-md">Shop More</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto min-h-[13rem] text-gray-900 text-sm font-semibold grid grid-cols-2 lg:grid-cols-8 gap-10 place-items-center py-10 ">
        <div className="scale" data-aos="slide-up" data-aos-duration="300">
          <img src="./images/img1.svg" alt="" className="h-12 " />
          <p>Tables</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="400">
          <img src="./images/img2.svg" alt="" className="h-12" />
          <p>Chairs</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="600">
          <img src="./images/img3.svg" alt="" className="h-12 mx-auto" />
          <p>Laptop stands</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="800">
          <img src="./images/img4.svg" alt="" className="h-12 mx-auto" />
          <p>Monitor stands</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1000">
          <img src="./images/img5.svg" alt="" className="h-12 mx-auto" />
          <p>Cabinets</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1200">
          <img src="./images/img6.svg" alt="" className="h-12 mx-auto" />
          <p>Mouse pads</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1400">
          <img src="./images/img7.svg" alt="" className="h-12 mx-auto" />
          <p>Study lamps</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1600">
          <img src="./images/img8.svg" alt="" className="h-12 mx-auto" />
          <p>Desk plants</p>
        </div>
      </div>
      <hr className=" border-gray-500 w-[80%] mx-auto" />
      <div className=" h-40 w-full">
        <ProductsList />
      </div>
    </>
  );
};

export default Home;
