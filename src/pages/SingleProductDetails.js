import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProductDetails } from "../store/actions/productAction";
const SingleProductDetails = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector((state) => {
    state.productDetails;
  });
  useEffect(() => {
    dispatch(getSingleProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <div
        className="w-full h-60 bg-[url('./images/store.jpg')] bg-cover mb-2"
        data-aos="zoom-in"
      >
        <div className="w-full h-60 bg-black bg-opacity-40 pt-32">
          <p className="text-white text-5xl font-semibold text-center">SHOP</p>
        </div>
      </div>
      <div className="bg-gray-400 w-full h-[80vh] flex justify-center items-center">
        product.map()
        <div className="imageDiv w-80 h-96">
          <Carousel>
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={item.url}
                  src={item.url}
                  className="CarouselImage object-cover w-80 h-96"
                  alt=""
                />
              ))}
          </Carousel>
        </div>
        <div className="w-[40%] h-96 bg-red-400 p-3">
          <h1 className="text-4xl text-gray-900 font-semibold">Converse</h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam rem
            adipisci laboriosam culpa incidunt omnis officia assumenda commodi
            officiis doloribus dolore sed earum enim voluptatum repellat
            praesentium, quod sunt id.
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
