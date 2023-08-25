import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetTodosQuery } from "../api/apiSlice";
// import { fetchProducts } from "../features/product/productSlice";
const Product = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);
  // const productsStatus = useSelector((state) => state.products.status);
  // const error = useSelector((state) => state.products.error);

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (isSuccess) {
    content = products.map((product) => {
      return (
        <div>
          <div key={product.id}>
            <img src={product.imageURL} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      );
    });
  }
  if (isError) {
    content = <p>{error}</p>;
  }
};

export default Product;
