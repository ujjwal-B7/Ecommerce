import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProductDetails } from "../store/actions/productAction";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "../components/ReviewCard";
import { useParams } from "react-router-dom";
const SingleProductDetails = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getSingleProductDetails(id));
  }, [dispatch, id]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
  return (
    <>
      <div
        className="w-full md:h-52 h-32 bg-[url('./images/store.jpg')] bg-cover"
        data-aos="zoom-in"
      >
        <div className="w-full md:h-52 h-32 bg-black bg-opacity-40 pt-32">
          <p className="text-white text-5xl font-semibold text-center">SHOP</p>
        </div>
      </div>
      <div className="w-full flex md:flex-row items flex-col justify-center pt-5">
        <div className="imageDiv lg:w-[30rem] md:w-80 w-[90%] h-40 md:h-[30rem]">
          <Carousel>
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={img.url}
                  src={img.url}
                  className="CarouselImage object-cover lg:w-[30rem] md:w-80 w-full h-40 md:h-[30rem] md:rounded-xl"
                  alt={`${index} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div className="lg:w-[30rem] md:w-96 w-[90%] md:h-[30rem] bg-white p-3 shadow">
          <h1 className="text-4xl text-gray-900 font-bold">{product.name}</h1>
          <div className="lg:flex items-center gap-5">
            <ReactStars {...options} value={product.ratings} />
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
              <button className="md:w-10 h-10 w-[31%] bg-gray-900 text-white rounded-lg">
                -
              </button>
              <input
                className="md:w-16 h-10 w-[31%] mx-2 rounded-lg border-2 border-gray-900 text-center"
                type="number"
                value="1"
              />
              <button className="md:w-10 h-10 w-[31%] bg-gray-900 text-white rounded-lg">
                +
              </button>
            </div>
            <button className="magenta hover:opacity-90 text-white md:w-36 w-full h-10 rounded-lg mt-5">
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
          <hr />
          <p className="font-light tracking-tight text-lg pt-2 pb-10">
            Description: {product.description}
          </p>
          <button className="bg-gray-400 hover:bg-opacity-90 px-2 mt-8 rounded-lg h-10 text-white">
            Submit Review
          </button>
        </div>
      </div>
      <div className="md:w-[44rem] w-[95%] min-h-[30rem] mx-auto shadow my-10 px-2">
        <h2 className="text-4xl font-bold text-center py-3">REVIEWS</h2>
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
    </>
  );
};

export default SingleProductDetails;
