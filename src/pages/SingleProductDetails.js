import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  createProductReview,
  getSingleProductDetails,
} from "../store/actions/productAction";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "../components/ReviewCard";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../store/actions/cartAction";
import { Rating } from "@material-ui/lab";
import { PRODUCT_REVIEW_RESET } from "../store/constants/productConstants";
const SingleProductDetails = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [showReviewBox, setShowReviewBox] = useState(true);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const { orders } = useSelector((state) => state.myOrder);
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(clearErrors());
    }
    if (reviewError) {
      toast.error(reviewError, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(clearErrors());
    }
    dispatch({ type: PRODUCT_REVIEW_RESET });
    dispatch(getSingleProductDetails(id));
  }, [dispatch, id, error]);

  const options = {
    // edit: false,
    // color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    // size: window.innerWidth < 600 ? 20 : 25,
    // value: product.ratings,
    // isHalf: true,
    size: "small",
    value: product.ratings,
    redaOnly: true,
    prescision: 0.5,
  };

  // increase quantity
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  // decrease quantity
  const decreaseQuantity = () => {
    const qty = quantity - 1;
    if (qty < 1) {
      setQuantity(1);
    } else {
      setQuantity(qty);
    }
  };

  //add to cart handler
  const addToCartHandler = () => {
    if (product.Stock === 0) {
      toast.error("Item out of stock", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch(addToCart(id, quantity));
    toast.success("Item Added to cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const { error: reviewError } = useSelector((state) => state.productReview);
  // review handler
  const submitReview = (e) => {
    const myform = new FormData();
    myform.set("rating", rating);
    myform.set("comment", comment);
    myform.set("productId", id);
    dispatch(createProductReview(myform));
    setShowReviewBox(!showReviewBox);
  };
  return (
    <>
      <Loader loading={loading} />
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60   flex justify-center items-center z-50
        ${showReviewBox ? "hidden" : "block"}
      `}
      >
        <div className="w-96 h-72 bg-white rounded-xl p-2">
          <h1 className="text-center font-semibold pb-4">Submit Review</h1>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="rounded-lg p-2 border-gray-400"
            placeholder="Submit your review"
            name=""
            id=""
            cols="42"
            rows="6"
          ></textarea>
          <Rating
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            size="small"
          />
          <div className="text-end space-x-4">
            <button
              className="text-green-600"
              onClick={() => setShowReviewBox(!showReviewBox)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="magenta text-white rounded-lg px-4 py-1"
              onClick={submitReview}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full h-32 bg-[url('./images/store.jpg')] bg-cover"
        data-aos="zoom-in"
      ></div>

      <div className="shadow-lg max-w-screen-xl mx-auto">
        <div className="w-full flex md:flex-row items flex-col md:gap-10 md:p-5 p-2">
          <div
            className="lg:max-w-[30rem] w-full md:h-[35rem] h-52"
            data-aos="zoom-in"
          >
            <Carousel>
              {product.images &&
                product.images.map((img, index) => (
                  <img
                    key={img.url}
                    src={img.url}
                    className="CarouselImage object-cover lg:w-[30rem] md:w-80 w-full md:h-[35rem] h-52 md:rounded-xl"
                    alt={`${index} Slide`}
                  />
                ))}
            </Carousel>
          </div>
          <div
            className="lg:w-[calc(100%-30rem)] w-full h-[35rem] bg-white p-3 relative"
            data-aos="fade-left"
          >
            <h1 className="text-4xl text-gray-900 font-bold">{product.name}</h1>
            <div className="lg:flex items-center gap-5">
              <Rating style={{ color: "tomato" }} {...options} />
              <span className="cursor-pointer text-gray-400">
                [ {product.numOfReviews} Reviews ]
              </span>
            </div>
            <hr />

            <p className="text-gray-900 font-semibold text-xl md:py-5 py-3">
              RS-{product.price} /-
            </p>
            <hr />
            <div className="md:flex gap-5 md:pb-5">
              <div className="md:pt-5 pt-2">
                <button
                  className="md:w-10 h-10 w-[31%] bg-gray-900 text-white rounded-lg"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <input
                  className="md:w-16 h-10 w-[31%] mx-2 rounded-lg border-2 border-gray-900 text-center"
                  readOnly
                  type="number"
                  value={quantity}
                />
                <button
                  className="md:w-10 h-10 w-[31%] bg-gray-900 text-white rounded-lg"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button
                className="magenta hover:opacity-90 text-white md:w-36 w-full h-10 rounded-lg mt-5"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </div>
            <hr />
            <p className="py-5 font-semibold">
              Status:{" "}
              <span
                className={product.Stock < 1 ? "text-red-600" : "text-gray-400"}
              >
                {product.Stock < 1 ? "Out Of Stock" : "InStock"}
              </span>
            </p>
            <p className="py-5 font-semibold">
              Stock:
              <span
                className={`pl-2 ${
                  product.Stock < 1 ? "text-red-600" : "text-[#EE6524]"
                }`}
              >
                {product.Stock}
              </span>
            </p>

            <hr />
            <p className="font-light tracking-tight text-lg pt-2 pb-10">
              Description: {product.description}
            </p>
            {/* {orders &&
              orders.map((order) => (
                <div>
                  {order.orderItems.map((item) =>
                    item.name === product.name ? ( */}
            <button
              className="magenta hover:bg-opacity-90 px-2 absolute md:bottom-5 bottom-1 mb-2 rounded-lg h-10 text-white"
              onClick={() => setShowReviewBox(!showReviewBox)}
            >
              Submit Review
            </button>
            {/* ) : (
                      ""
                    )
                  )}
                </div>
              ))} */}
          </div>
        </div>
      </div>

      {/* review section */}
      <div className="lg:w-[calc(100%-16rem)] w-[95%] min-h-[30rem] mx-auto shadow my-10 px-2">
        <h2 className="text-4xl font-bold text-center py-3">REVIEWS</h2>
        <div className="w-[70%] mx-auto">
          <hr className=" border-gray-400" />
          {product.reviews && product.reviews[0] ? (
            <div>
              {product.reviews.map((review) => (
                <ReviewCard review={review} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-xl text-center pt-20">
              "No Reviews Yet"
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
