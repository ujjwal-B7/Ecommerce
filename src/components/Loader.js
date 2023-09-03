import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Loader = () => {
  const { isLoading, error } = useAuth0();
  return (
    <section>
      {!error && isLoading && (
        <p className="fixed w-full h-screen bg-black top-0 z-50 opacity-50">
          <span className="loader"></span>
        </p>
      )}
    </section>
  );
};

export default Loader;
