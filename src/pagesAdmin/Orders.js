import React, { useState, useEffect } from "react";
import {
  clearErrors,
  getAllOrders,
  updateOrder,
} from "../store/actions/orderAction";
import { deleteProducts } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_PRODUCT_RESET } from "../store/constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_ORDERS_RESET } from "../store/constants/orderConstants";
import MessageBox from "../components/MessageBox";
const Orders = () => {
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState(null);
  const [order, setOrder] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, error } = useSelector((state) => state.allOrders);
  const {
    isDeleted,
    isUpdated,
    error: updateError,
  } = useSelector((state) => state.updateAndDeleteOrder);
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    dispatch(getAllOrders());
  }, [dispatch, error]);

  // submit status
  const submitStatus = (id) => {
    // e.preventDefault();
    const details = {
      _id: id,
      orderStatus: status,
    };
    dispatch(updateOrder(details));
    setProduct(null);
  };

  useEffect(() => {
    if (isUpdated) {
      setProduct(null);
      dispatch({ type: UPDATE_ORDERS_RESET });
    }
  }, [isUpdated, dispatch]);

  // handle status
  const handleStatus = (item, order) => {
    setProduct(item);
    setOrder(order);
  };

  // delete orders
  // const deleteProductsHandler = (id) => {
  //   dispatch(deleteProducts(id));
  //   navigate("/admin/dashboard");
  //   dispatch({ type: DELETE_PRODUCT_RESET });
  // };
  let i = 1;
  return (
    <>
      {product && (
        <div
          className={`status-box w-full h-screen bg-black/30 flex justify-center items-center
                  `}
        >
          <div className="w-96 h-60 bg-white">
            <h1>Update Status {product.name + order._id}</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                submitStatus(order._id); // Call submitStatus with product ID
              }}
            >
              <select
                id={product._id}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Choose status</option>
                {order.orderStatus === "Processing" && (
                  <option value="Shipped">Shipped</option>
                )}
                {order.orderStatus === "Shipped" && (
                  <option value="Delivered">Delivered</option>
                )}
              </select>
              <button type="submit">Update status</button>
            </form>
            <button onClick={() => setProduct(null)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="productTable col-start-3 col-end-13 w-full h-screen overflow-y-auto rounded-lg  pb-10 bg-admin pt-24 px-4">
        <table className="w-full">
          <tr className="text-left bg-[#4f5467] text-white uppercase sticky -top-[0.9rem]">
            <th>No.</th>
            <th>Product Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Ordered Date</th>
            <th>status</th>
            <th>Total Amount</th>
            {/* <th>Action</th> */}
          </tr>
          {orders &&
            orders.map((order) =>
              order.orderItems.map((item, index) => (
                <tr
                  key={index}
                  className="text-gray-600 border-b-gray-600/60 border-[0.5px] "
                >
                  <td>{i++}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{order.createdAt.substr(0, 10)}</td>
                  <td>
                    {order.orderStatus}
                    <button
                      className="pl-2 underline-offset-2 underline  rounded-xl text-green-500 hover:opacity-80"
                      onClick={() => handleStatus(item, order)}
                    >
                      Update
                    </button>
                  </td>
                  <td>{order.itemsPrice + order.shippingPrice}</td>
                  {/* <td className="space-y-3">
                    <button className="mx-1 px-4 py-1 bg-[#D11A2A] rounded-xl text-white">
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))
            )}
        </table>
      </div>
    </>
  );
};

export default Orders;
