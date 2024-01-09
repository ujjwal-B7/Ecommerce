import React from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import ScrollToTop from "react-scroll-to-top";
import ProductsList from "../components/ProductsList";
import QuicView from "../components/QuicView";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Store = ({ openQuickView, closeQuickView }) => {
  const [click, setClick] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const { loading } = useSelector((state) => state.products);
  const navigate = useNavigate();

  // search items function
  const searchItems = (e) => {
    if (searchKeyword.trim()) {
      navigate(`/store/${searchKeyword}`);
    } else {
      navigate("/store");
    }
  };
  return (
    <>
      <Loader loading={loading} />
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
      <div
        className="w-full lg:h-[40vh] h-[30vh] bg-[url('./images/store.jpg')] bg-cover mb-2"
        data-aos="zoom-in"
      >
        <div className="w-full lg:h-[40vh] h-[30vh] bg-black bg-opacity-40 pt-20">
          <p className="text-white text-5xl font-semibold text-center py-10">
            SHOP
            <span className="block text-sm mx-auto w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            </span>
          </p>
        </div>
      </div>
      <section className="max-w-7xl mx-auto pb-40 text-gray-600">
        <div
          className="w-[70%] flex mx-auto sticky top-[5.1rem] z-40"
          data-aos="zoom-in"
        >
          <input
            type="text"
            placeholder="Search items"
            className="border-blue-200 border-[3px] bg-text rounded-md h-11 w-full pl-2 shadow-lg
            focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-1 relative
            "
            value={searchKeyword}
            onChange={(e) => searchItems(setSearchKeyword(e.target.value))}
          />
          <div className="absolute right-44  top-3 text-gray-900">
            <ion-icon name="searchKeyword-outline"></ion-icon>
          </div>
          {/* <div>
            <input
              type="submit"
              value="searchKeyword"
              className="rounded-md h-11 bg-blue-200 w-32 ml-4 text-gray-900 hover:bg-blue-300"
            />
          </div> */}
        </div>
        <ProductsList
          click={click}
          setClick={setClick}
          openQuickView={openQuickView}
          searchKeyword={searchKeyword}
        />
      </section>
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

export default Store;
