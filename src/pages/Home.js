import React from "react";

const Home = () => {
  return (
    <div className="lg:h-screen h-[60vh] w-full bg-[url('./images/main.jpg')] bg-cover">
      <div className="h-screen w-full bg-black bg-opacity-40">
        <div
          className="text-white max-w-7xl mx-auto  px-4 md:pt-80 pt-[35%]"
          data-aos="slide-up"
        >
          <p className="sm:text-6xl text-4xl font-semibold w-[70%] pb-4">
            Stay productive and get more work done!
          </p>
          <button className="h-10 w-32 bg-black  rounded-md">Shop More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
