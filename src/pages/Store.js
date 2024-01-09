import React from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import ScrollToTop from "react-scroll-to-top";
import ProductsList from "../components/ProductsList";
import QuicView from "../components/QuicView";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import { Typography } from "@material-ui/core";
import { Slider } from "@material-ui/core";
const Store = ({ openQuickView, closeQuickView }) => {
  const [click, setClick] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const { loading, productsCount, productPerPage } = useSelector(
    (state) => state.products
  );
  const navigate = useNavigate();

  // setCurrentPage
  const setCurrentPageNumber = (e) => {
    setCurrentPage(e);
  };
  // search items function
  const searchItems = (e) => {
    if (searchKeyword.trim()) {
      navigate(`/store/${searchKeyword}`);
    } else {
      navigate("/store");
    }
  };

  // price handler
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
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
        className="w-full lg:h-[33vh] h-[30vh] bg-[url('./images/store.jpg')] bg-cover mb-2"
        data-aos="zoom-in"
      >
        <div className="w-full lg:h-[33vh] h-[30vh] bg-black bg-opacity-40 pt-20">
          <p className="text-white text-5xl font-semibold text-center py-10">
            SHOP
            <span className="block text-sm mx-auto w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            </span>
          </p>
        </div>
      </div>
      <section className="max-w-7xl relative mx-auto pb-40 text-gray-600 px-2">
        <div
          className="md:w-[50%] w-full flex mx-auto sticky top-[5.1rem] z-40"
          // data-aos="zoom-in"
        >
          <input
            type="text"
            placeholder="Search items"
            className="border-blue-200 border-[3px] bg-text rounded-md h-11 w-full pl-2 shadow-md focus:border-gray-400 focus:border-[2px]  relative
            "
            value={searchKeyword}
            onChange={(e) => searchItems(setSearchKeyword(e.target.value))}
          />
          {/* <div>
            <input
            type="submit"
            value="searchKeyword"
            className="rounded-md h-11 bg-blue-200 w-32 ml-4 text-gray-900 hover:bg-blue-300"
            />
          </div> */}
        </div>
        <div className="filter absolute md:right-10 md:top-0 top-14 md:ml-0 ml-2">
          <Typography>Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />
        </div>
        <ProductsList
          click={click}
          setClick={setClick}
          openQuickView={openQuickView}
          searchKeyword={searchKeyword}
          currentPage={currentPage}
          price={price}
        />

        {productsCount > 9 ? (
          <div className="paginationBox text-gray-400">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={productPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNumber}
              nextPageText="Next"
              prevPageText="Prev"
              // firstPageText="1st"
              // lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        ) : (
          ""
        )}
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
