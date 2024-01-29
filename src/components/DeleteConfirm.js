import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../store/actions/cartAction";
const DeleteConfirm = ({
  todo,
  toggleDeleteVisibility,
  isDeleteVisible,
  setIsDeleteVisible,
  click,
  setClick,
  itemID,
  item,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {};

  // cart item delete handler
  const deleteCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
    // toggleDeleteVisibility();
    setClick(!click);
  };
  return (
    <div className="w-full h-screen absolute z-10 top-0  bg-black/20">
      <div
        key={itemID}
        className={`del w-96 h-44 absolute bg-white shadow-lg text-center text-sm rounded-md pt-5  
    ${click ? "hidden" : "block"}
    `}
      >
        <ion-icon name="alert-circle-outline" size="large"></ion-icon>
        <p className="mb-5 text-lg">Remove {item.name} from cart?</p>
        <button
          className="bg-text h-10 w-24 rounded-md mx-2 hover:shadow-md"
          // onClick={toggleDeleteVisibility}
          onClick={() => setClick(!click)}
        >
          Cancel
        </button>
        <button
          key={itemID}
          className="bg-[#D11A2A] h-10 w-24 rounded-md mx-2 text-white hover:shadow-md"
          onClick={() => deleteCartItemHandler(itemID)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirm;
