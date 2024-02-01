import React from "react";
import AdminNav from "../adminComponent/AdminNav";
import SideBar from "../adminComponent/SideBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
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
  const { products } = useSelector((state) => state.products);
  const { users } = useSelector((state) => state.user);
  let outOfStock = 0;
  products &&
    products.forEach((product) => {
      if (product.Stock === 0) outOfStock += 1;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "Total Amount",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197,72,49)"],
        borderColor: "#f26c6d",
        data: [0, 4000],
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

  return (
    <>
      {/* <div className="grid grid-cols-12"> */}
      <div className="col-start-3 col-end-13 mt-20 w-full p-10 text-gray-900 bg-slate-200">
        <div className=" text-center">
          <h1 className="font-semibold">Dashboard</h1>
          <span className="font-semibold">Total Amount:</span>
          <span>10000</span>
        </div>
        <div className="flex justify-around pt-2">
          <Link className="dashboardDetails" to="/admin/products">
            <p>Products</p>
            <p>{products.length}</p>
          </Link>
          <Link
            className="dashboardDetails "
            style={{ backgroundColor: "rgba(110, 36, 238, 0.856)" }}
            to="/admin/orders"
          >
            <p>Orders</p>
            <p>10</p>
          </Link>
          <Link className="dashboardDetails" to="/admin/users">
            <p>Users</p>
            <p>{users}</p>
          </Link>
        </div>
        {/* charts */}
        <div className="pl-20 pt-20">
          <div
            className="flex gap-40"
            style={{ width: "250px", height: "250px" }}
          >
            <Doughnut data={doughnutState} />
            <Doughnut data={doughnutState} />
          </div>
          <div className="pt-20">
            <Line data={lineState} style={{ width: "70vw", height: "500px" }} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Dashboard;
