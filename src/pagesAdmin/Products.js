import React, { useEffect } from "react";
import { clearErrors, getAdminProducts } from "../store/actions/productAction";
import { deleteProducts } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_PRODUCT_RESET } from "../store/constants/productConstants";
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isDeleted } = useSelector((state) => state.deleteProduct);
  // useEffect(() => {
  //   dispatch(getAdminProducts());
  // }, [dispatch]);
  useEffect(() => {
    if (isDeleted) {
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
  }, [dispatch]);

  // delete products
  const deleteProductsHandler = (id) => {
    dispatch(deleteProducts(id));
  };
  let i = 0;
  return (
    <>
      <div className="productTable col-start-3 col-end-13 mt-24 w-[95%] rounded-lg  pb-10">
        <table className="mx-auto">
          <tr>
            <th>No.</th>
            <th>Item id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {products &&
            products.map((product) => (
              <tr className="text-gray-600">
                <td>{i++}</td>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.Stock}</td>
                <td>
                  <Link className="mx-1 px-4 py-1 bg-green-400 rounded-xl text-white">
                    Edit
                  </Link>
                  <button
                    className="mx-1 px-4 py-1 bg-[#D11A2A] rounded-xl text-white"
                    onClick={() => deleteProductsHandler(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
};

export default Products;
