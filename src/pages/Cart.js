import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DeleteConfirm from "../components/DeleteConfirm";
import { addToCart } from "../store/actions/cartAction";
const Cart = ({ showCart, setShowCart }) => {
  const dispatch = useDispatch();
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [click, setClick] = useState(true);
  const toggleDeleteVisibility = () => {
    setIsDeleteVisible(!isDeleteVisible);
  };
  const { cartItems } = useSelector((state) => state.cart);
  const increaseQuantity = (id, quantity, stock) => {
    const newQuantity = quantity + 1;
    if (stock <= quantity) return;
    dispatch(addToCart(id, newQuantity));
  };
  const decreaseQuantity = (id, quantity, stock) => {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) return;
    dispatch(addToCart(id, newQuantity));
  };

  return (
    <section className="text-gray-900 cart relative z-50 px-2 h-full">
      <p className="text-3xl font-semibold py-5 text-center">Cart</p>
      <div
        className="absolute lg:hidden top-5 right-4  text-center text-3xl"
        onClick={() => setShowCart(!showCart)}
      >
        <ion-icon name="close"></ion-icon>
      </div>
      {cartItems &&
        cartItems.map((item) => (
          <>
            <div
              key={item.product}
              className="bg-text  w-full h-24 mx-auto rounded-md flex justify-around items-center mb-2 "
            >
              <div
                className="text-red-700  h-6 w-6 rounded-full text-center"
                //   onClick={toggleDeleteVisibility}
                onClick={() => setClick(!click)}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </div>
              <img src={item.image} alt="" className="h-20 w-16" />
              <p className="text-lg">
                {item.name}
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
                    decreaseQuantity(item.product, item.quantity, item.stock)
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
                    increaseQuantity(item.product, item.quantity, item.stock)
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className={` ${click ? "hidden" : "block"} `}>
              <DeleteConfirm click={click} setClick={setClick} item={item} />
            </div>
          </>
        ))}

      <button className="bg-gray-900 text-white  w-[95%] text-lg h-10 hover:opacity-90 rounded-md absolute bottom-1">
        Confirm Order
      </button>

      {/* {isDeleteVisible && (
        <DeleteConfirm toggleDeleteVisibility={toggleDeleteVisibility} />
      )} */}
    </section>
  );
};

export default Cart;
