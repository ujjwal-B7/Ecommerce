import React from "react";
import ProductsList from "../components/ProductsList";
import FeaturedList from "../components/FeaturedList";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error } =
    useAuth0();
  return (
    <>
      <div className="lg:h-screen h-[60vh] w-full">
        <img
          src="./images/bag.jpg"
          className=" lg:h-screen h-[60vh] w-full object-cover"
          alt=""
        />
        {/* <div className="lg:h-screen h-[60vh] w-full bg-black bg-opacity-40"> */}
        {!error && isLoading && <span class="loader"></span>}
        <div
          className=" text-white absolute lg:left-36 lg:top-80 top-60 left-10"
          data-aos="slide-up"
        >
          <p className="sm:text-6xl text-4xl font-semibold w-[70%] pb-4">
            Stay productive and get more work done!
          </p>
          <button className="shop h-12 w-52 border-white border text-white rounded-md">
            Shop More
          </button>
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
      <div className="w-full">
        <ProductsList />
      </div>
      <hr className=" border-gray-500 mx-auto w-[80%]" />
      <div
        className=" bg-[#f8f8f8] mb-10 min-h-[6rem] w-[80%] mx-auto offers grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center text-gray-900 "
        data-aos="zoom-out"
      >
        <div className="flex py-9">
          <ion-icon name="car"></ion-icon>
          <p className="font-semibold pl-2">
            Free Shipping
            <span className="block text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet
            </span>
          </p>
        </div>
        <div className="flex py-9">
          <ion-icon name="time-outline"></ion-icon>
          <p className="font-semibold pl-2">
            Support 24/7
            <span className="block text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet
            </span>
          </p>
        </div>
        <div className="flex py-9">
          <ion-icon name="wallet-outline"></ion-icon>
          <p className="font-semibold pl-2">
            Money return
            <span className="block text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet
            </span>
          </p>
        </div>
        <div className="flex py-9">
          <ion-icon name="gift-outline"></ion-icon>
          <p className="font-semibold pl-2">
            Member Discount
            <span className="block text-sm font-normal text-gray-500">
              Lorem ipsum dolor sit amet
            </span>
          </p>
        </div>
      </div>
      <FeaturedList />
      <div className="min-h-[35rem] w-full bg-[url('./images/bg.jpg')] bg-cover text-white flex flex-col justify-center items-center gap-10 py-10">
        <p className="text-2xl" data-aos="slide-up" data-aos-duration="300">
          Custom Setup
        </p>
        <p
          className="lg:text-7xl md:text-5xl text-4xl w-[50%] font-semibold text-center"
          data-aos="slide-up"
          data-aos-duration="300"
        >
          Let’s build your dream working space
        </p>
        <button
          className="hover:border hover:border-white hover:bg-transparent h-12 w-52 bg-black rounded-md"
          data-aos="slide-up"
        >
          Shop Now
        </button>
      </div>
    </>
  );
};

export default Home;
