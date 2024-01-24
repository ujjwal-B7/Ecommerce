import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/actions/productAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@material-ui/lab";
import QuicView from "./QuicView";
const ProductsList = ({
  click,
  setClick,
  openQuickView,
  closeQuickView,
  searchKeyword,
  currentPage,
  limit,
  price,
  category,
  ratings,
}) => {
  const options = {
    // edit: false,
    // color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    // size: window.innerWidth < 600 ? 20 : 25,
    // isHalf: true,
    size: "small",
    redaOnly: true,
    prescision: 0.5,
  };
  const dispatch = useDispatch();
  const [passProductDetails, setPassProductDetails] = useState(null);
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
    // state.productsCount
  );
  useEffect(() => {
    dispatch(getProduct(searchKeyword, currentPage, price, category, ratings));
  }, [dispatch, searchKeyword, currentPage, price, category, ratings]);

  return (
    <section className="relative max-w-7xl mx-auto sm:pb-52 pb-48 text-gray-600 lg:px-0 md:px-10 ">
      {products && (
        <p
          className="text-center pt-10 pb-10 text-4xl 
       "
        >
          New Arrivals
        </p>
      )}
      <div className="container grid lg:grid-cols-3 grid-cols-2 place-items-center lg:gap-x-10 sm:gap-y-48 sm:gap-x-10 gap-y-28 mx-auto">
        {products &&
          products.slice(0, limit).map((product) => (
            <>
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
                // to={`/product/${product.id}`}
                className="h-80 lg:w-[90%] sm:w-80 w-40"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className="products overflow-hidden">
                  <img
                    src={product.images[0].url}
                    className="sm:h-80 sm:w-96 object-cover"
                    alt={product.name}
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
                      id={product.id}
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
                <Link to={`/product/${product._id}`}>
                  <p className="font-semibold text-gray-900 pt-4">
                    {product.name}
                    <span className="block text-gray-600">{product.price}</span>
                    <span className="font-medium text-gray-600">
                      {product.description}
                    </span>
                  </p>
                </Link>
                <div className="lg:flex items-center gap-5">
                  <Rating
                    style={{ color: "tomato" }}
                    {...options}
                    value={product.ratings}
                  />
                  <span className="cursor-pointer">
                    [ {product.numOfReviews} Reviews ]
                  </span>
                </div>
              </div>
            </>
          ))}
        {!products && (
          <p className="text-gray-400 text-4xl absolute top-36">
            No products found
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
