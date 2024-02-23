import React, { useEffect } from "react";
import { clearErrors, getAllOrders } from "../store/actions/orderAction";
import { deleteProducts } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_PRODUCT_RESET } from "../store/constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, error } = useSelector((state) => state.allOrders);
  const { isDeleted } = useSelector((state) => state.updateAndDeleteOrder);
  useEffect(() => {
    if (error) {
      toast.error(error.data, {
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
  }, [dispatch]);
  console.log("mero", orders);
  // delete orders
  // const deleteProductsHandler = (id) => {
  //   dispatch(deleteProducts(id));
  //   navigate("/admin/dashboard");
  //   dispatch({ type: DELETE_PRODUCT_RESET });
  // };
  let i = 1;
  return (
    <>
      <div className="productTable col-start-3 col-end-13 w-full h-screen overflow-y-auto rounded-lg  pb-10 bg-admin pt-24 px-4">
        <table className="w-full">
          <tr className="text-left bg-[#4f5467] text-white uppercase">
            <th>No.</th>
            <th>Product Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Ordered Date</th>
            <th>status</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
          {orders &&
            orders.map((order) =>
              order.orderItems.map((item, index) => (
                <tr key={index} className="text-gray-600">
                  <td>{i++}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{order.createdAt.substr(0, 9)}</td>
                  <td>{order.orderStatus}</td>
                  <td>{order.itemsPrice + order.shippingPrice}</td>
                  <td className="space-y-3">
                    <Link
                      to={`/admin/editProducts/${order._id}`}
                      className="mx-1 px-6 py-2 bg-green-400 rounded-xl text-white"
                    >
                      Edit
                    </Link>
                    <button className="mx-1 px-4 py-1 bg-[#D11A2A] rounded-xl text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
        </table>
      </div>
    </>
  );
};

export default Orders;
