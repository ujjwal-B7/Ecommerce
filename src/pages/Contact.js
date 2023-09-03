import React from "react";
import Loader from "../components/Loader";
const Contact = () => {
  return (
    <>
      <Loader />
      <div
        className="w-full lg:h-[50vh] h-[40vh] bg-[url('./images/contact.jpg')] bg-cover mb-10"
        data-aos="zoom-in"
      >
        <div className="w-full lg:h-[50vh] h-[40vh] bg-black bg-opacity-30">
          <p className="text-white text-5xl font-semibold text-center pt-32">
            Contact Us
            <span className="block text-sm mx-auto w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ab amet. Similique sed dolor
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
