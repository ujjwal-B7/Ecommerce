import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <section>
          <p className="fixed w-full h-screen bg-black top-0 z-50 opacity-50">
            <span className="loader top-[32%] sm:right-[40%] right-[20%]"></span>
          </p>
        </section>
      )}
    </>
  );
};

export default Loader;
