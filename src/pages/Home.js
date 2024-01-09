import React from "react";
import ProductsList from "../components/ProductsList";
import FeaturedList from "../components/FeaturedList";
import Loader from "../components/Loader";
import LoginForm from "../components/LoginForm";
import QuicView from "../components/QuicView";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { getProduct } from "../store/actions/productAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = ({ openQuickView, closeQuickView }) => {
  const [click, setClick] = useState(true);
  // const openQuickView = () => {
  //   document.body.style.overflow = "hidden";
  // };
  // const closeQuickView = () => {
  //   document.body.style.overflow = "auto";
  // };

  // fetching the product
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
    // state.productsCount
  );
  useEffect(() => {
    if (error) {
      productFetchErrorToastify(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  function productFetchErrorToastify(error) {
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <Loader loading={loading} />
      <ToastContainer />
      <div
        className={` ${click ? "hidden" : "block"} 
      `}
      >
        <QuicView
          click={click}
          setClick={setClick}
          closeQuickView={closeQuickView}
        />
      </div>
      <div className="lg:h-screen sm:h-[67vh] h-[60vh] w-full relative">
        <img
          src="./images/bag.jpg"
          className=" lg:h-screen sm:h-[67vh] h-[60vh] w-full object-cover "
          alt=""
        />

        <div className="lg:h-screen sm:h-[67vh] h-[60vh] w-full bg-black bg-opacity-30 text-white absolute  top-0 right-0">
          <div
            className=" text-white absolute  top-[40%] left-[9%]"
            data-aos="slide-up"
          >
            <p className="sm:text-6xl text-4xl font-semibold w-[70%] pb-4">
              Stay productive and get more work done!
            </p>
            <button className="shop sm:h-12 h-8 w-52 border-white border text-white rounded-md">
              Shop More
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto min-h-[13rem] text-gray-900 text-sm font-semibold grid grid-cols-3 lg:grid-cols-8 sm:gap-10 gap-x-3 gap-y-8  place-items-center py-10">
        <div className="scale" data-aos="slide-up" data-aos-duration="300">
          <img src="./images/img1.svg" alt="" className="sm:h-12 h-8" />
          <p>Tables</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="400">
          <img src="./images/img2.svg" alt="" className="sm:h-12 h-8" />
          <p>Chairs</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="600">
          <img src="./images/img3.svg" alt="" className="sm:h-12 h-8 mx-auto" />
          <p>Laptop stands</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="800">
          <img src="./images/img4.svg" alt="" className="sm:h-12 h-8 mx-auto" />
          <p>Monitor stands</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1000">
          <img src="./images/img5.svg" alt="" className="sm:h-12 h-8 mx-auto" />
          <p>Cabinets</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1200">
          <img src="./images/img6.svg" alt="" className="sm:h-12 h-8 mx-auto" />
          <p>Mouse pads</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1400">
          <img src="./images/img7.svg" alt="" className="sm:h-12 h-8 mx-auto" />
          <p>Study lamps</p>
        </div>
        <div className="scale" data-aos="slide-up" data-aos-duration="1600">
          <img src="./images/img8.svg" alt="" className="sm:h-12 h-8 mx-auto" />
          <p>Desk plants</p>
        </div>
        <div
          className="scale lg:hidden"
          data-aos="slide-up"
          data-aos-duration="1600"
        >
          <img src="./images/img4.svg" alt="" className="sm:h-12 h-8 mx-auto" />
          <p>Desktops</p>
        </div>
      </div>
      <hr className=" border-gray-500 w-[80%] mx-auto" />
      {/* <p className="text-center pt-10 pb-5 text-4xl">New Arrivals</p>; */}
      <ProductsList
        click={click}
        setClick={setClick}
        openQuickView={openQuickView}
        limit={6}
      />
      <hr className=" border-gray-500 mx-auto w-[80%]" />
      <div
        className=" bg-text mb-10 min-h-[6rem] w-[80%] mx-auto offers grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center text-gray-900 "
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
          className="hover:border hover:border-white hover:bg-transparent sm:h-12 h-8 w-52 bg-black rounded-md"
          data-aos="slide-up"
        >
          Shop Now
        </button>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#111827",
          padding: "5px",
        }}
      />
    </>
  );
};

export default Home;
