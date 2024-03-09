import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirm from "../components/DeleteConfirm";
import { addToCart } from "../store/actions/cartAction";
import { toast } from "react-toastify";
import { removeCartItem } from "../store/actions/cartAction";

import "react-toastify/dist/ReactToastify.css";
const Cart = ({ showCart, setShowCart }) => {
  const fetchedCartItems = JSON.parse(localStorage.getItem("addedCartItems"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [click, setClick] = useState(true);
  const toggleDeleteVisibility = () => {
    setIsDeleteVisible(!isDeleteVisible);
  };
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  // increase quantity
  const increaseQuantity = (id, quantity, stock) => {
    const newQuantity = quantity + 1;
    if (stock <= quantity) return;
    dispatch(addToCart(id, newQuantity));
  };
  // decrease quantity
  const decreaseQuantity = (id, quantity, stock) => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) return;
    dispatch(addToCart(id, newQuantity));
  };

  // confirm order
  const checkOutHandler = () => {
    {
      !isAuthenticated &&
        toast.error("Please login first to place order.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
    {
      isAuthenticated && navigate("/shippingInfo");
    }
    setShowCart(!showCart);
  };

  const deleteCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
    // toggleDeleteVisibility();
    // setClick(!click);
  };
  return (
    <section className="text-gray-900 cart relative z-50 h-full">
      <p className="text-3xl font-semibold py-5 text-center">Cart</p>
      <div
        className="absolute lg:hidden top-5 right-4  text-center text-3xl"
        onClick={() => setShowCart(!showCart)}
      >
        <ion-icon name="close"></ion-icon>
      </div>
      {fetchedCartItems && fetchedCartItems.length === 0 ? (
        <div className="text-gray-400 text-center pt-20 text-2xl">
          "No products added"
        </div>
      ) : (
        <>
          <div className="overflow-y-auto min-h-[76%]">
            {fetchedCartItems &&
              fetchedCartItems.map((item) => (
                <>
                  <div
                    key={item.product}
                    className="bg-text  w-[95%] h-24 mx-auto rounded-md flex justify-around items-center mb-2"
                  >
                    <div
                      key={item.product}
                      className="text-red-700  h-6 w-6 rounded-full text-center"
                      //   onClick={toggleDeleteVisibility}
                      // onClick={() => setClick(!click)}
                      onClick={() => deleteCartItemHandler(item.product)}
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <img src={item.image} alt="" className="h-20 w-16" />
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
                      <span className="block text-xs text-gray-600">
                        subtotal:{item.quantity * item.price}
                      </span>
                    </p>
                    <div className="flex space-x-1">
                      <button
                        className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md"
                        onClick={() =>
                          decreaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock
                          )
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="border border-gray-900 h-8 w-14 text-gray-900 text-lg rounded-md p-1 text-center"
                      />

                      <button
                        className="bg-gray-400 h-8 w-8 text-white text-lg rounded-md"
                        onClick={() =>
                          increaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock
                          )
                        }
                      >
                        +
                      </button>
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
          {user && user.role === "user" && (
            <div className="sticky bottom-0 w-full px-2 bg-white">
              <hr className="border-gray-900 w-[95%]" />
              <p className="py-4 text-end">
                Total:
                {fetchedCartItems &&
                  fetchedCartItems.reduce(
                    (acc, item) => (acc += item.price * item.quantity),
                    0
                  )}
              </p>
              <button
                className="bg-gray-900 text-white w-full text-lg h-10 hover:opacity-90 rounded-md mb-2"
                onClick={checkOutHandler}
              >
                Check Out
              </button>
            </div>
          )}
        </>
      )}

      {/* {isDeleteVisible && (
        <DeleteConfirm toggleDeleteVisibility={toggleDeleteVisibility} />
      )} */}
    </section>
  );
};

export default Cart;
