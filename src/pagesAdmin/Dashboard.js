import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import { getAdminProducts } from "../store/actions/productAction";
import { getAllOrders } from "../store/actions/orderAction";
import { loadUsersByAdmin } from "../store/actions/userAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { loading, error, orders, totalAmount } = useSelector(
    (state) => state.allOrders
  );
  const { users } = useSelector((state) => state.allUsers);
  let outOfStock = 0;
  products &&
    products.forEach((product) => {
      if (product.Stock === 0) outOfStock += 1;
    });
  console.log(orders);
  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "Total Amount",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197,72,49)"],
        borderColor: "#f26c6d",
        data: [0, totalAmount],
      },
    ],
  };
  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#880808", " #4D286D"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  useEffect(() => {
    if (error) {
      toast.error("Item out of stock", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch(getAdminProducts());
    dispatch(getAllOrders());
    dispatch(loadUsersByAdmin());
  }, [dispatch]);
  return (
    <>
      {/* <div className="grid grid-cols-12"> */}
      <div className="col-start-3 col-end-13 mt-16 w-full h-screen px-10 py-11 text-gray-900 bg-admin">
        <div className="bg-white p-2 rounded-xl text-gray-600">
          <div>
            <h1 className="font-semibold">Dashboard</h1>
            <span className="font-semibold">Total Amount( RS ) : </span>
            <span>{totalAmount}</span>
          </div>
          <div className="flex gap-4 pt-2">
            <Link
              className="dashboardDetails bg-[#fb9678]"
              to="/admin/products"
            >
              <p>Products</p>
              <p>{products.length}</p>
            </Link>
            <Link className="dashboardDetails bg-[#01c0c8]" to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link className="dashboardDetails bg-[#4f5467]" to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>
        {/* charts */}
        <div className="rounded-xl mt-5 flex gap-5">
          <div className="bg-white rounded-xl w-[35%] py-14">
            <Doughnut data={doughnutState} style={{ margin: "auto" }} />
          </div>
          <div className="w-[65%] bg-white rounded-xl p-2">
            <Line data={lineState} style={{ width: "100%", height: "500px" }} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Dashboard;
