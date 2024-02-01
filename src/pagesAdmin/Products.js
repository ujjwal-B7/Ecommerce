import React from "react";
import { clearErrors, getAdminProducts } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  const {  products } = useSelector((state) => state.products);
  return (
    <>
      <div className="productTable col-start-3 col-end-13 mt-24 w-[95%] rounded-lg mx-auto">
        <table className="">
          <tr>
            <th>Item id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {products &&
            products.map((product) => (
              <tr className="text-gray-600">
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.Stock}</td>
                <td>
                <button className="mx-1 px-4 py-1 bg-green-400 rounded-xl text-white">Edit</button>
                <button className="mx-1 px-4 py-1 bg-red-600 rounded-xl text-white">Delete</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
};

export default Products;
