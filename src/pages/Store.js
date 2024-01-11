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

const categories = ["Select Category", "Footwear", "Bottom", "Tops", "Attire"];

const Store = ({ openQuickView, closeQuickView }) => {
  const [click, setClick] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const { loading, productsCount, products, productPerPage } = useSelector(
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

  const categoryHandler = (e) => {
    if (e.target.value === "Select Category") {
      setCategory("");
    } else {
      setCategory(e.target.value);
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
          className="md:w-[50%] w-full ml-auto sticky top-[5.1rem] z-40"
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
        <div className="flex  space-x-28 -mt-12 ml-10">
          <div className="w-28">
            <p className="font-semibold text-lg text-gray-900">Price</p>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
              style={{ color: "rgb(17 24 39)" }}
            />
          </div>
          <div>
            <p className="font-semibold text-lg text-gray-900 pl-1">Category</p>
            <select
              className="categoryBox rounded-xl pl-2 border-2 border-r-gray-900 text-gray-400 font-light tracking-tight
"
              value={category}
              onChange={(e) => categoryHandler(e)}
            >
              {categories.map((categoryItem) => (
                <option
                  className="cursor-pointer"
                  key={categoryItem}
                  value={categoryItem}
                >
                  {categoryItem}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ProductsList
          click={click}
          setClick={setClick}
          openQuickView={openQuickView}
          searchKeyword={searchKeyword}
          currentPage={currentPage}
          price={price}
          category={category}
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
