import React from "react";
import { updateOrder } from "../store/actions/orderAction";
import { useDispatch } from "react-redux";

const Status = ({ product, status, setStatus, setProduct }) => {
  const dispatch = useDispatch();

  // submit status
  const submitStatus = () => {
    // e.preventDefault();
    // console.log(id);
    console.log("reached");
    // dispatch(updateOrder(id, status));
  };
  return (
    <>
      {product && (
        <div
          className={`status-box w-full h-screen bg-black/30 flex justify-center items-center 
                  `}
        >
          <div className="w-96 h-60 bg-white">
            <h1>Update Status {product.name}</h1>
            <form onSubmit={submitStatus}>
              <select
                id={product._id}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Choose status</option>
                {product.orderStatus === "Processing" && (
                  <option value="shipped">Shipped</option>
                )}
                {product.orderStatus === "Shipped" && (
                  <option value="delivered">Delivered</option>
                )}
              </select>
            </form>
            <button type="submit">Update status</button>
            <button onClick={() => setProduct(null)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Status;
