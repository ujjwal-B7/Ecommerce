import React from "react";
import { clearErrors, getAdminProducts } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  const { error, products } = useSelector((state) => state.products);
  return (
    <div className="col-start-3 col-end-13 mt-24 w-[95%] rounded-lg mx-auto">
      {products &&
        products.map((product) => (
          <p>{product.name}</p>
          // <table className="border-collapse border-2 border-gray-900">
          //   <tr>
          //     <td>Item id</td>
          //     <td></td>
          //     <td></td>
          //     <td></td>
          //   </tr>
          //   <tr>
          //     <td>{product.name}</td>
          //     <td>{}</td>
          //     <td></td>
          //     <td></td>
          //   </tr>
          // </table>
        ))}
    </div>
  );
};

export default Products;
