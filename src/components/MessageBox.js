import React from "react";

const MessageBox = ({ message }) => {
  return (
    <div className="w-96 bg-white/95 text-gray-900 rounded-md py-2 text-center absolute alert">
      {message}
    </div>
  );
};

export default MessageBox;
