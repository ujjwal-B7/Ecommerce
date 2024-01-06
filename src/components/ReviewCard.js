import React from "react";
import ReactStars from "react-rating-stars-component";
import sharbani from "../images/sharbani.jpg";
const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
    value: review.rating,
    isHalf: true,
  };
  return (
    <>
      <div className="flex gap-5 pt-5">
        <div className="h-20 w-20 rounded-full bg-gray-400">
          <img
            src={sharbani}
            className="h-20 w-20 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="md:ml-10">
          <p className="text-xl font-semibold">{review.name}</p>
          <p>
            <ReactStars {...options} />
          </p>
          <p className="pt-2 font-light text-gray-500">{review.comment}</p>
        </div>
      </div>
      <hr className="w-full border-gray-400" />
    </>
  );
};

export default ReviewCard;
