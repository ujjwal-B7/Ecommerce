import React, { useState, useEffect } from "react";
import { getAllOrders, updateOrder } from "../store/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_ORDERS_RESET } from "../store/constants/orderConstants";
const Orders = () => {
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState(null);
  const [order, setOrder] = useState(null);
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state) => state.allOrders);
  const { isUpdated } = useSelector((state) => state.updateAndDeleteOrder);
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
      dispatch(getAllOrders());
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
          <div className="w-96 px-2 py-8 bg-white rounded-lg">
            <h1 className="font-semibold text-center text-lg">
              Update Status of {product.name}
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                submitStatus(order._id); // Call submitStatus with product ID
              }}
            >
              <div className="flex justify-center">
                <select
                  className="w-full my-4 mx-5 px-2 py-2 rounded"
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
              </div>
              <div className="flex  justify-center gap-3 mt-5">
                <button
                  className="hover:bg-[#cc0000] hover:text-white transition-all border-2 border-[#cc0000] text-gray-900 px-10 py-1 rounded-lg"
                  onClick={() => setProduct(null)}
                >
                  Cancel
                </button>
                <button
                  className="bg-gray-900 text-white px-7 py-1 rounded-lg hover:bg-opacity-90"
                  type="submit"
                >
                  Update status
                </button>
              </div>
            </form>
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
            <th>Total Amount (RS)</th>
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
