// import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { removeWishlistItem } from "../store/actions/cartAction";
// import "react-toastify/dist/ReactToastify.css";

// import { useSelector } from "react-redux";
// import { clearErrors, getMyOrders } from "../store/actions/orderAction";
// import { getProduct } from "../store/actions/productAction";

// import { useEffect } from "react";

// const RecommendedProduct = ({
//   showRecommendedProducts,
//   setShowRecommendedProducts,
// }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { loading, error, orders } = useSelector((state) => state.myOrder);
//   const { products } = useSelector(
//     (state) => state.products
//     // state` .productsCount
//   );

//   useEffect(() => {
//     dispatch(getMyOrders());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getProduct());
//   }, [dispatch]);

//   console.log("products", products);
//   console.log("orders", orders);

//   const fetchedWishlistItems = JSON.parse(
//     localStorage.getItem("addedWishlistItems")
//   );

//   const deleteWishlistItemHandler = (id) => {
//     dispatch(removeWishlistItem(id));
//     // toggleDeleteVisibility();
//     // setClick(!click);
//   };

//   const navigateToProduct = (id) => {
//     navigate(`/product/${id}`);
//     setShowRecommendedProducts(!showRecommendedProducts);
//   };
//   return (
//     <section className="text-gray-900 cart relative z-50 h-full">
//       <p className="text-3xl font-semibold py-5 text-center">
//         Recommended Products
//       </p>
//       <div
//         className="absolute top-5 right-4 cursor-pointer text-center text-3xl"
//         onClick={() => setShowRecommendedProducts(!showRecommendedProducts)}
//       >
//         <ion-icon name="close"></ion-icon>
//       </div>
//       {fetchedWishlistItems && fetchedWishlistItems.length === 0 ? (
//         <div className="text-gray-400 text-center pt-20 text-2xl">
//           "No recommended products."
//         </div>
//       ) : (
//         <>
//           <div className="overflow-y-auto min-h-[76%]">
//             {fetchedWishlistItems &&
//               fetchedWishlistItems.map((item) => (
//                 <>
//                   <div
//                     key={item.product}
//                     className="bg-text  w-[95%] py-2 mx-auto rounded-md flex justify-around items-center mb-2"
//                   >
//                     <div
//                       className="cursor-pointer"
//                       onClick={() => navigateToProduct(item.product)}
//                     >
//                       <img
//                         src={item.image}
//                         alt=""
//                         className="h-24 w-40 rounded-md"
//                       />
//                     </div>
//                     <p className="text-sm">
//                       {item.name.length < 8
//                         ? `${item.name}`
//                         : `${item.name.substr(0, 10)}...`}
//                       <span className="block text-xs text-gray-600">
//                         Stock: {item.stock}
//                       </span>
//                       <span className="block text-xs text-gray-600">
//                         Quantity: {item.quantity}
//                       </span>
//                       <span className="block text-xs text-gray-600">
//                         {item.price}
//                       </span>
//                     </p>
//                     <div
//                       key={item.product}
//                       className="text-red-700  h-6 w-6 rounded-full text-center cursor-pointer"
//                       //   onClick={toggleDeleteVisibility}
//                       // onClick={() => setClick(!click)}
//                       onClick={() => deleteWishlistItemHandler(item.product)}
//                     >
//                       <ion-icon name="trash-outline"></ion-icon>
//                     </div>
//                   </div>
//                   {/* <div className={` ${click ? "hidden" : "block"} `}>
//                     <DeleteConfirm
//                       click={click}
//                       setClick={setClick}
//                       itemID={item.product}
//                       item={item}
//                     />
//                   </div> */}
//                 </>
//               ))}
//           </div>
//         </>
//       )}

//       {/* {isDeleteVisible && (
//         <DeleteConfirm toggleDeleteVisibility={toggleDeleteVisibility} />
//       )} */}
//     </section>
//   );
// };

// export default RecommendedProduct;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMyOrders } from "../store/actions/orderAction";
import { getProduct } from "../store/actions/productAction";

const RecommendedProduct = ({
  showRecommendedProducts,
  setShowRecommendedProducts,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.myOrder);
  const { products } = useSelector((state) => state.products);

  // Fetch orders and products when component loads
  useEffect(() => {
    dispatch(getMyOrders());
    dispatch(getProduct());
  }, [dispatch]);

  // Extract ordered product IDs and their categories
  const orderedProductIds = orders?.reduce((acc, order) => {
    order.orderItems.forEach((item) => acc.push(item.product));
    return acc;
  }, []);

  const orderedProductCategories = orders?.reduce((acc, order) => {
    order.orderItems.forEach((item) => acc.push(item.category));
    return acc;
  }, []);

  // Filter products to recommend (similar categories but not ordered)
  const recommendedProducts = products?.filter(
    (product) =>
      orderedProductCategories?.includes(product.category) && // Same category
      !orderedProductIds?.includes(product._id) // Exclude already ordered
  );

  console.log("recommended", recommendedProducts);

  useEffect(() => {
    if (recommendedProducts) {
      localStorage.setItem(
        "recommendedProductCount",
        recommendedProducts.length
      );
    }
  }, [recommendedProducts]);

  const navigateToProduct = (id) => {
    navigate(`/product/${id}`);
    setShowRecommendedProducts(!showRecommendedProducts);
  };

  return (
    <section className="text-gray-900 cart relative z-50 h-full">
      <p className="text-3xl font-semibold py-5 text-center">
        Recommended Products
      </p>
      <div
        className="absolute top-5 right-4 cursor-pointer text-center text-3xl"
        onClick={() => setShowRecommendedProducts(!showRecommendedProducts)}
      >
        <ion-icon name="close"></ion-icon>
      </div>
      {recommendedProducts && recommendedProducts.length === 0 ? (
        <div className="text-gray-400 text-center pt-20 text-2xl">
          "No recommended products."
        </div>
      ) : (
        <div className="overflow-y-auto min-h-[76%]">
          {recommendedProducts?.map((item) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id}
              className="bg-text  w-[95%] py-2 mx-auto rounded-md flex justify-around items-center mb-2"
            >
              {console.log(item)}
              <div
                className="cursor-pointer h-24 w-24"
                onClick={() => navigateToProduct(item._id)}
              >
                <img
                  src={item.images[0]?.url} // Assuming images is an array
                  alt={item.name}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <p>
                {item.name.length < 8
                  ? `${item.name}`
                  : `${item.name.substr(0, 10)}...`}
                <span className="block text-xs text-gray-600">
                  Stock: {item.Stock}
                </span>
                <span className="block text-xs text-gray-600">
                  Price {item.price}
                </span>
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecommendedProduct;
