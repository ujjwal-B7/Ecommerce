import React from "react";

const Home = () => {
  return (
    <div className="lg:h-screen h-[50rem] w-full bg-[url('./images/main.jpg')] bg-cover">
      <div className="h-screen w-full bg-black bg-opacity-40">
        <div className="text-white max-w-7xl mx-auto pt-80 px-4">
          <p className="text-6xl font-semibold w-[70%] pb-4">
            Stay productive and get more work done!
          </p>
          <button className="h-10 w-32 bg-gray-600 rounded-md">
            Shop More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
