import React, { useEffect } from "react";
import { clearErrors, getAdminProducts } from "../store/actions/productAction";
import { deleteProducts } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_PRODUCT_RESET } from "../store/constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, error } = useSelector((state) => state.products);
  const { isDeleted } = useSelector((state) => state.deleteProduct);
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
    dispatch(getAdminProducts());
  }, [dispatch]);

  // delete products
  const deleteProductsHandler = (id) => {
    dispatch(deleteProducts(id));
    navigate("/admin/dashboard");
    dispatch({ type: DELETE_PRODUCT_RESET });
  };
  let i = 1;
  return (
    <>
      <div className="productTable col-start-3 col-end-13 w-full h-screen overflor-y-auto rounded-lg  pb-10 bg-admin pt-24 px-4">
        <table className=" bg-white w-full">
          <tr className="text-left bg-[#4f5467] text-white uppercase">
            <th>No.</th>
            <th>Item id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
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
                  <Link
                    to={product._id}
                    className="mx-1 px-4 py-1 bg-green-400 rounded-xl text-white"
                  >
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
