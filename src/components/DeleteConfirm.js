import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DeleteConfirm = ({
  todo,
  toggleDeleteVisibility,
  isDeleteVisible,
  setIsDeleteVisible,
  click,
  setClick,
}) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    toggleDeleteVisibility();
  };

  return (
    <div
      className={`del absolute w-96 h-44  bg-white shadow-lg text-center text-sm rounded-md pt-5
    ${click ? "hidden" : "block"}
    `}
    >
      <ion-icon name="alert-circle-outline" size="large"></ion-icon>
      <p className="mb-5 text-lg">Remove item from cart?</p>
      <button
        className="bg-text h-10 w-24 rounded-md mx-2 hover:shadow-md"
        // onClick={toggleDeleteVisibility}
        onClick={() => setClick(!click)}
      >
        Cancel
      </button>
      <button
        className="bg-[#D11A2A] h-10 w-24 rounded-md mx-2 text-white hover:shadow-md"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteConfirm;
