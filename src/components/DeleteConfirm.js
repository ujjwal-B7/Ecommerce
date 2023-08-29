import React from "react";
import { Link, useNavigate } from "react-router-dom";
const DeleteConfirm = ({
  todo,
  toggleDeleteVisibility,
  isDeleteVisible,
  setIsDeleteVisible,
}) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    toggleDeleteVisibility();
  };

  return (
    <div className="del absolute w-72 h-40 bg-white shadow-lg text-center text-sm rounded-md pt-5">
      <p className="mb-10 text-lg">Remove item from cart?</p>
      <button
        className="bg-[#f8f8f8] h-10 w-24 rounded-md mx-2"
        onClick={toggleDeleteVisibility}
      >
        Cancel
      </button>
      <button
        className="bg-red-400 h-10 w-24 rounded-md mx-2"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteConfirm;