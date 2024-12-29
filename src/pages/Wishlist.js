import React from "react";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWishlistItem } from "../store/actions/cartAction";
import "react-toastify/dist/ReactToastify.css";
const Wishlist = ({ wishlist, setWishlist }) => {
  const fetchedWishlistItems = JSON.parse(
    localStorage.getItem("addedWishlistItems")
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const deleteWishlistItemHandler = (id) => {
    dispatch(removeWishlistItem(id));
    // toggleDeleteVisibility();
    // setClick(!click);
  };

  const navigateToProduct = (id) => {
    navigate(`/product/${id}`);
    setWishlist(!wishlist);
  };
  return (
    <section className="text-gray-900 cart relative z-50 h-full">
      <p className="text-3xl font-semibold py-5 text-center">Wishlist</p>
      <div
        className="absolute top-5 right-4 cursor-pointer text-center text-3xl"
        onClick={() => setWishlist(!wishlist)}
      >
        <ion-icon name="close"></ion-icon>
      </div>
      {fetchedWishlistItems && fetchedWishlistItems.length === 0 ? (
        <div className="text-gray-400 text-center pt-20 text-2xl">
          "No products added"
        </div>
      ) : (
        <>
          <div className="overflow-y-auto min-h-[76%]">
            {fetchedWishlistItems &&
              fetchedWishlistItems.map((item) => (
                <>
                  <div
                    key={item.product}
                    className="bg-text  w-[95%] py-2 mx-auto rounded-md flex justify-around items-center mb-2"
                  >
                    <div
                      className="cursor-pointer"
                      onClick={() => navigateToProduct(item.product)}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-24 w-40 rounded-md"
                      />
                    </div>
                    <p className="text-sm">
                      {item.name.length < 8
                        ? `${item.name}`
                        : `${item.name.substr(0, 10)}...`}
                      <span className="block text-xs text-gray-600">
                        Stock: {item.stock}
                      </span>
                      <span className="block text-xs text-gray-600">
                        Quantity: {item.quantity}
                      </span>
                      <span className="block text-xs text-gray-600">
                        {item.price}
                      </span>
                    </p>
                    <div
                      key={item.product}
                      className="text-red-700  h-6 w-6 rounded-full text-center cursor-pointer"
                      //   onClick={toggleDeleteVisibility}
                      // onClick={() => setClick(!click)}
                      onClick={() => deleteWishlistItemHandler(item.product)}
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </div>
                  </div>
                  {/* <div className={` ${click ? "hidden" : "block"} `}>
                    <DeleteConfirm
                      click={click}
                      setClick={setClick}
                      itemID={item.product}
                      item={item}
                    />
                  </div> */}
                </>
              ))}
          </div>
        </>
      )}

      {/* {isDeleteVisible && (
        <DeleteConfirm toggleDeleteVisibility={toggleDeleteVisibility} />
      )} */}
    </section>
  );
};

export default Wishlist;
