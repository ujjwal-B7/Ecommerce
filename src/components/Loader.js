import React from "react";

const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <section>
          <p className="fixed w-full h-screen bg-black top-0 z-50 opacity-50">
            <span className="loader "></span>
          </p>
        </section>
      )}
    </>
  );
};

export default Loader;
