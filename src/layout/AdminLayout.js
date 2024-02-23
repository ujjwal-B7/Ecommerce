import React from "react";
import AdminNav from "../adminComponent/AdminNav";
import SideBar from "../adminComponent/SideBar";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import Dashboard from "../pagesAdmin/Dashboard";
import Products from "../pagesAdmin/Products";
import Notifications from "../pagesAdmin/Notifications";
import Users from "../pagesAdmin/Users";
import Orders from "../pagesAdmin/Orders";
import AddProduct from "../pagesAdmin/AddProduct";
import EditProducts from "../pagesAdmin/EditProducts";

const AdminLayout = ({ children }) => {
  const location = useLocation();

  // Define an array of paths where the sidebar should be visible (admin paths)
  const adminPaths = [
    "/admin/dashboard",
    "/admin/addProducts",
    "/admin/editProducts",
    "/admin/products",
    "/admin/orders",
    "/admin/users",
  ];

  // Check if the current location is in the adminPaths array
  const isOnAdminPage = adminPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  // const isOnAdminPage = adminPaths.includes(location.pathname);

  return (
    <div className="lg:grid lg:grid-cols-12 bg-gray-50">
      {/* Conditionally render the admin sidebar and navbar */}
      {isOnAdminPage && <AdminNav />}
      {isOnAdminPage && <SideBar />}
      {/* <AdminNav />
      <SideBar /> */}
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/notification" element={<Notifications />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/addProducts" element={<AddProduct />} />
        <Route path="/admin/editProducts/:id" element={<EditProducts />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
